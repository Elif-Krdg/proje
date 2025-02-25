import mysql.connector

def get_db():
    """Veritabanı bağlantısını oluştur ve döndür."""
    db = mysql.connector.connect(
        host="localhost",
        user="root",  # XAMPP'de varsayılan kullanıcı adı
        password="",  # Varsayılan şifre boş olabilir
        database="okul_sistemi"  # Veritabanı adı
    )
    return db

def init_db(app):
    """Veritabanı bağlantısını başlat (Flask için)"""
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT DATABASE();")
        print(f"Bağlı olunan veritabanı: {cursor.fetchone()[0]}")
        cursor.close()
        db.close()

def close_db(app):
    """Veritabanı bağlantısını kapat (Flask için)"""
    pass  # Flask için teardown'da kullanılacaksa, burada ekstra işlem yapılabilir.
