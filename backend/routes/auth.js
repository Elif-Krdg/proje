const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Veritabanı bağlantısını içe aktarın

const router = express.Router();  // BU SATIRI EKLEDİĞİNDEN EMİN OL!

router.post('/register', async (req, res) => {
    const { name, email, password, student_id} = req.body;

    // if (!name || !studentId || !email || !password || !confirmPassword) {
    //     return res.status(400).json({ msg: "Tüm alanları doldurun" });
    // }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Kullanıcıyı ekle
        db.query("INSERT INTO kullanıcılar (name, email, password, student_id) VALUES (?, ?, ?, ?)", 
            [name, email, hashedPassword, student_id], 
            (err, result) => {
                if (err) {
                    console.error('Veritabanı hatası:', err); // Hata mesajını konsola yazdır
                    return res.status(500).json({ msg: "Kayıt başarısız!", error: err });
                }
                res.status(201).json({ msg: "Kayıt başarılı!" });
            }
        );
    } catch (err) {
        console.error('Sunucu hatası:', err); // Hata mesajını konsola yazdır
        res.status(500).json({ msg: "Sunucu hatası!", error: err });
    }
});

router.post('/login', (req, res) => {
    const { name, password } = req.body;

    const sql = `
        SELECT * FROM kullanıcılar
        WHERE name = ?`;

    db.query(sql, [name], async (err, results) => {
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

            }
        });
    });
});

module.exports = router;