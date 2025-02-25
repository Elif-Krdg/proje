const mysql = require('mysql2');

// Veritabanı bağlantısı
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // Kullanıcı adınızı buraya yazın
  password: '',   // Şifreniz yoksa burayı boş bırakabilirsiniz, ya da şifrenizi yazın
  database: 'okul_sistemi' // Veritabanı adınız
});

// Bağlantıyı test et
connection.connect((err) => {
  if (err) {
    console.error('Veritabanı bağlantısı başarısız:', err.message); // Hata mesajını yazdır
    return;
  }
  console.log('Veritabanı bağlantısı başarılı!');
});
