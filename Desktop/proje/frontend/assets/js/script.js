document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert('Kullanıcı adı ve şifre gereklidir!');
    } else {
        alert('Giriş başarılı!');
    }
});

document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const studentId = document.getElementById('student-id').value;
    const email = document.getElementById('email').value;
    const university = document.getElementById('university').value;
    const department = document.getElementById('department').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const nameRegex = /^[A-Za-zğüşöçİĞÜŞÖÇ ]+$/;
    const numberRegex = /^[0-9]+$/;
    if (!nameRegex.test(fullName) || !nameRegex.test(university) || !nameRegex.test(department)) {
        alert('Ad, üniversite ve bölüm sadece harf içermelidir!');
        return;
    }
    if (!numberRegex.test(studentId)) {
        alert('Öğrenci numarası sadece sayılardan oluşmalıdır!');
        return;
    }
    if (!email.includes('@')) {
        alert('Geçerli bir e-posta adresi girin!');
        return;
    }
    if (password.length < 8) {
        alert('Şifre en az 8 karakter olmalıdır!');
        return;
    }
    if (password !== confirmPassword) {
        alert('Şifreler eşleşmiyor!');
        return;
    }
    alert('Kayıt başarılı!');
});
