import mysql.connector

# MySQL bağlantısını oluştur
db = mysql.connector.connect(
    host="localhost",
    user="root",  # XAMPP'de varsayılan kullanıcı adı
    password="",  # Varsayılan şifre boş olabilir
    database="okul_sistemi"  # Bağlantı yapılacak veritabanı adı
)

cursor = db.cursor()

# Kullanıcıları listeleme testi
cursor.execute("SELECT * FROM kullanıcılar")  # Tablo adını 'kullanıcılar' olarak bıraktık
users = cursor.fetchall()

for user in users:
    print(user)

db.close()