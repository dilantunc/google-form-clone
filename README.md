Google Forms Klonu
Proje Amacı:
Bu proje, kullanıcıların dinamik formlar oluşturabileceği ve bu formları düzenleyebileceği bir sistem sunmayı amaçlıyor. Google Forms'tan ilham alınarak geliştirilen bu proje, form yapısı üzerinde esneklik sağlayarak kullanıcıların sorular ve cevap seçeneklerini düzenlemesine olanak tanıyor. Ayrıca verilerin hem tarayıcıda yerel olarak saklanması hem de bulut tabanlı bir veritabanında tutulması sağlanıyor.
Kullanılan Teknolojiler:
React: Projenin frontend kısmı için kullanıldı. React ile bileşen tabanlı bir yapı oluşturularak formlar dinamik ve yeniden kullanılabilir hale getirildi.
LocalStorage: Kullanıcıların oluşturduğu formların tarayıcıda yerel olarak saklanmasını sağladı. Bu yöntemle, sayfa yenilendiğinde veriler korunuyor ve kaybolmuyor.
Firebase: Gerçek zamanlı veri yönetimi sağlamak için Firebase entegrasyonu kullanıldı. Firebase ile veriler bulut üzerinde depolanıyor, böylece formlar başka cihazlardan da erişilebilir hale geliyor.
Strapi: Backend için Strapi kullanılarak, form verilerinin API üzerinden yönetilmesi sağlandı. Bu sayede, form verileri merkezi bir veritabanında saklanıp yönetildi.
hCaptcha: Formların güvenliğini artırmak için hCaptcha entegrasyonu yapıldı. Kullanıcıların bot olup olmadığını doğrulamak için kullanıldı.
Teknik Detaylar: Bu projede, form bileşenlerinin React ile oluşturulması ve yönetilmesi önemliydi. useState ve useEffect hook’larıyla formlar üzerindeki değişiklikler yönetildi. Firebase sayesinde veriler gerçek zamanlı olarak güncellendi ve kullanıcının başka cihazlardan da erişim sağlamasına olanak tanındı. Strapi kullanarak API entegrasyonu sağlandı ve kullanıcıların form verilerini veritabanı üzerinde yönetmesi kolaylaştırıldı.


