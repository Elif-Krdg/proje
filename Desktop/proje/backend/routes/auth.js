const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();  // BU SATIRI EKLEDİĞİNDEN EMİN OL!



router.post('/register', async (req, res) => {
    const { name, email, password, universite_id } = req.body;

    if (!name || !email || !password || !universite_id) {
        return res.status(400).json({ msg: "Tüm alanları doldurun" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query("INSERT INTO kullanıcılar (name, email, password, universite_id) VALUES (?, ?, ?, ?)", 
            [name, email, hashedPassword, universite_id], 
            (err, result) => {
                if (err) return res.status(500).json({ msg: "Kayıt başarısız!" });
                res.status(201).json({ msg: "Kayıt başarılı!" });
            }
        );
    } catch (err) {
        res.status(500).json({ msg: "Sunucu hatası!" });
    }
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = `
        SELECT users.*, universities.universite_adı 
        FROM users 
        JOIN universities ON users.universite_id = universities.id 
        WHERE users.email = ?`;

    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ msg: "Kullanıcı bulunamadı!" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ msg: "Hatalı şifre!" });

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                universite_id: user.universite_id,
                universite_adı: user.universite_adı // Üniversite adı bilgisi !
            }
        });
    });
});
module.exports = router;
