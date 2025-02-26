document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Kullanıcı adı ve şifre gereklidir!');
    } else {
        localStorage.setItem('username', username);
        window.location.href = 'profile.html';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username-display').innerText = username;
    }
});

document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value.trim();
    const studentId = document.getElementById('student-id').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const university = document.getElementById('university').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const nameRegex = /^[A-Za-zğüşöçİĞÜŞÖÇ\s]+$/;
    const numberRegex = /^[0-9]+$/;

    if (!nameRegex.test(fullName)) {
        alert('Ad Soyad sadece harf içermelidir!');
        return;
    }
    if (!nameRegex.test(university)) {
        alert('Üniversite adı sadece harf içermelidir!');
        return;
    }

    if (!numberRegex.test(studentId)) {
        alert('Öğrenci numarası sadece sayılardan oluşmalıdır!');
        return;
    }

    if (!email.includes('@')) {
        alert('Geçerli bir e-posta adresi girin!');
        return;
    }

    if (password.length < 8) {
        alert('Şifre en az 8 karakter olmalıdır!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Şifreler eşleşmiyor!');
        return;
    }

    alert('Kayıt başarılı!');
});

function showSection(section) {
    const contentDisplay = document.getElementById('content-display');
    if (section === 'favorites') {
        contentDisplay.innerHTML = '<p>BEĞENİLEN DOSYA BULUNAMADI</p>';
    } else if (section === 'uploaded-files') {
        contentDisplay.innerHTML = '<p>YÜKLENMİŞ DOSYA BULUNAMADI</p>';
    } else if (section === 'upload') {
        contentDisplay.innerHTML = '<p>YÜKLEMEYE BAŞLAYIN</p>';
    }
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}