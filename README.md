# proje
Kullanılan Teknolojiler

HTML - Sayfa yapısı için

CSS - Sayfa tasarımı ve stil düzenlemeleri

JavaScript - Dinamik içerik yönetimi ve etkileşimler

Kurulum

Projeyi bilgisayarınıza kopyalayın:

git clone https://github.com/kullanici/ogrenci-portali.git

Dosyaların bulunduğu dizine gidin:

cd ogrenci-portali

Projeyi bir web sunucusunda çalıştırın (XAMPP veya Python HTTP sunucu kullanabilirsiniz).

Kullanım

Profil Sayfası (çıkış yapana kadar oturum aktif kalır)

"Dosya Yükle" butonu ile dosya yükleyebilirsiniz.

"Yüklenen Dosyalar" butonu ile daha önce yüklediğiniz dosyaları listeleyebilirsiniz.

"Beğenilenler" butonu ile favori dosyalarınızı görebilirsiniz.

Proje Yapısı /
|-- assets/
|   |-- css/
|   |   |-- style.css
|   |-- js/
|   |   |-- script.js
|-- profile.html
|-- belge.html
|-- README.md

Katkıda Bulunma

Projeye katkıda bulunmak istiyorsanız, lütfen bir pull request oluşturun veya bir hata bulduysanız issue açın.


POJE RAPORU

Proje Künyesi		
Proje Adı:	Not Paylaşım Sistemi	
	Öğrenci No	Adı Soyadı
Hazırlayan(lar):	2.32201e+08	Elif Karadağ
	2.32201e+08	Kezban Nur Çay
	2.32201e+08	Hatice Yılmaz
1.	Proje Amacı
1.1 Problemin TanımıGünümüzde öğrenciler, ders notlarına kolayca erişebilecekleri, not paylaşımı yapabilecekleri ve kaliteli içeriklere ulaşabilecekleri bir sistemden yoksundur. Mevcut çözümler genellikle bireysel bazda ilerlemekte ve kolektif bir paylaşım ortamı sağlamamaktadır.
1.2 Çözüm YaklaşımıBu proje, öğrencilerin ders notlarını paylaşabilecekleri, belirli ders ve bölümlere göre organize edebilecekleri bir platform sunmayı hedeflemektedir. Kullanıcılar, ders notlarını yükleyebilir, bu notları görüntüleyebilir ve başkalarının yüklediği notlara erişebilirler.
1.3 Proje Kapsamı ve Hedef Kitle
Hedef Kitle: Üniversite öğrencileri
Kapsam:
Öğrencilerin ders notlarını paylaşmalarına ve erişmelerine olanak tanıyan bir web tabanlı sistem.Kullanıcıların belirli derslere ve bölümlere göre içerikleri filtreleyebilmeleri.Gelecekte mobil uygulama desteği ile genişletilebilecek bir yapı.
1.4 Teknik Hedefler
Performans: Hızlı ve kesintisiz bir kullanıcı deneyimi sağlamak.
Ölçeklenebilirlik: Kullanıcı sayısı ve içerik arttıkça sistemin sürdürülebilir kalmasını sağlamak.
Entegrasyon: Gelecekte görüntü işleme algoritmaları ile uygunsuz içeriklerin tespit edilmesi ve engellenmesi.
1.	Frontend tasarımı  
  
Bu bir öğrenci profil sayfasındır. Öğrencinin dosya yükleme işlemlerini yaptığı ve yüklediği dosyaları görebildiği ekrandır.
 
Burada öğrencinin sisteme dosya yüklediği ekrandır. Dosya seç seçeneğine basıldığında aşağıdaki sayfa açılmaktadır. 
1.	Backend tasarımı (varsa)
2.1 Kullanılan Teknolojiler
Programlama Dili: JavaScript (Node.js)
Veritabanı: MySQL (XAMPP ile)
Diğer Teknolojiler: HTML, CSS, JavaScript
2.2 Proje Yapısı
Kullanıcı Modeli: Kullanıcılar, kayıt olup giriş yapabilir ve ders notlarını yükleyebilir.
Yetkilendirme Modeli: Kullanıcı giriş sistemi e-posta bazlı doğrulama ile çalışmaktadır.
İşlem Kayıtları: Kullanıcı aktiviteleri ve yüklenen içerikler sistemde saklanacaktır.
Log Yönetimi: Kullanıcı aktiviteleri takip edilerek sistem optimizasyonu sağlanacaktır.
2.3 Güvenlik Önlemleri
Şifreler hashlenerek saklanmaktadır.
E-posta doğrulama mekanizması uygulanmaktadır.
Gelecekte uygunsuz paylaşımları tespit edecek görüntü işleme algoritmaları entegre edilecektir.
2.4 Hata Yönetimi ve Veri Doğrulama
Kullanıcı girişleri sıkı bir doğrulama sürecinden geçmektedir.Eksik veya yanlış girilen veriler sistem tarafından kontrol edilerek uygun hata mesajları gösterilmektedir.
1.	Sonuç ve Değerlendirme
3.1 Başlangıç Hedeflerine Ulaşım
Gerçekleştirilen Özellikler:
Kullanıcıların kayıt olup giriş yapabilmesi
Dosya yükleme mekanizmasının çalışması
MySQL veritabanı bağlantısının sağlanması
Kullanıcıların içerik yükleyebilmesi
Eksik veya Geliştirilecek Özellikler:
Yüklenen dosyaların ders ve bölümlere göre kategorize edilmesi
Kullanıcıların beğendiği notları kendi sayfalarına kaydedebilmesi
En çok beğenilen notların üst sıralara taşınması
Notları yükleyen kişilerin isimlerini opsiyonel olarak göstermesi
Gelecekte uygunsuz içerikleri tespit edecek görüntü işleme mekanizmasının entegrasyonu
3.2 Teknik Performans Analizi
Başarımlar: Sistemin temel işlevleri sorunsuz çalışmakta.
Karşılaşılan Zorluklar: Veritabanı tasarımında, dosyaların bölümlere ve derslere göre ayrılması aşamasında henüz tam bir yapı oluşturulmadı.
Teknik Kazanımlar: Kullanıcı kimlik doğrulama sistemleri, veri tabanı bağlantısı ve dosya yükleme süreçleri başarıyla gerçekleştirildi.
3.3 Gelecek Geliştirmeler
Mobil uygulama geliştirilmesi
Kullanıcıların beğendikleri notları kaydedebilmesi
Uygunsuz içerikleri filtreleyen bir yapay zeka modülü eklenmesi
Notların ders ve bölümlere ayrılması
Öğrencilerin en çok beğenilen notlarının sıralanması
3.4 Proje Etki AnaliziBu sistem, öğrenciler için büyük bir kolaylık sağlayarak ders materyallerine erişimi artıracak ve kolektif öğrenmeyi teşvik edecektir. İlerleyen aşamalarda, mobil versiyonunun geliştirilmesiyle erişim daha da yaygınlaştırılabilir.
