document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Burada API'ye veri gönderilecek veya basit bir kontrol yapılabilir
    if (username && password) {
        alert('Giriş başarılı!');
    } else {
        alert('Kullanıcı adı ve şifre gereklidir!');
    }
});

document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Burada API'ye veri gönderilecek veya basit bir kontrol yapılabilir
    if (username && email && password) {
        alert('Kayıt başarılı!');
    } else {
        alert('Tüm alanları doldurduğunuzdan emin olun!');
    }
});

document.getElementById('upload-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const file = document.getElementById('file').files[0];

    if (file) {
        alert('Dosya başarıyla yüklendi!');
    } else {
        alert('Lütfen bir dosya seçin!');
    }
});
