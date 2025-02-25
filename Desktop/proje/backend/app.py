from flask import Flask, jsonify
from veritabani import init_db, get_db, close_db  # Güncellenmiş import işlemi

app = Flask(__name__)

# JWT için gizli anahtar (şu an kullanılmıyor, ama ileride eklenebilir)
app.config['JWT_SECRET_KEY'] = 'super-secret-key'

# Veritabanını başlat
init_db(app)

@app.route('/')
def home():
    return {"message": "API Çalışıyor!"}

@app.route('/kullanicilar', methods=['GET'])
def kullanicilar():
    db = get_db()  # Veritabanı bağlantısını al
    cursor = db.cursor()

    cursor.execute("SELECT * FROM kullanıcılar")
    users = cursor.fetchall()

    return jsonify([{"id": user[0], "ad": user[1], "soyad": user[2], "email": user[3]} for user in users])

@app.teardown_appcontext
def teardown(exception):
    close_db(app)  # Veritabanı bağlantısını kapat

if __name__ == '__main__':
    app.run(debug=True)