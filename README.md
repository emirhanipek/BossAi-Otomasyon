# Boss Otomasyon Botu

Bu proje, Playwright ve Node.js kullanarak https://app.sertelvida.com.tr/ adresine otomatik olarak giriş yapıp, bir Excel dosyasındaki soruları sırayla sisteme sorar ve her sorunun cevabını bekler. Temizleme veya ekstra işlem yapılmaz, sadece ardışık olarak soru sorulur.

## Özellikler
- Excel dosyasından (sorular.xlsx) soruları okur
- Her soruyu sırayla sisteme gönderir
- Her sorunun cevabını bekler, ardından bir sonraki soruya geçer
- Giriş bilgileri .env dosyasından alınır (gizlilik için)

## Kurulum - 

1. **Gerekli paketleri yükleyin:**

```zsh
npm install
```

2. **.env dosyasını oluşturun:** - deneme 

Proje kök dizinine bir `.env` dosyası ekleyin ve aşağıdaki gibi doldurun:

```
EMAIL=emre.ozer@siriusaitech.com
PASSWORD=Ee123456
```

3. **.gitignore dosyasını oluşturun:**

```
.env
```

4. **sorular.xlsx** dosyasını hazırlayın:
- İlk sütunda sorular olmalı (başlık satırı olabilir, kod 2. satırdan başlar)

## Kullanım

```zsh
node basic-bot.js
```

Bot, otomatik olarak giriş yapacak ve tüm soruları sırayla soracaktır.

## Notlar
- Giriş bilgilerinizi `.env` dosyasında tutun, asla git'e göndermeyin.
- Kodda herhangi bir temizleme veya sohbet sıfırlama işlemi yoktur.
- Sadece soru sorar ve cevabı bekler.

## Gereksinimler
- Node.js
- Playwright
- xlsx

Kurulum için:

```zsh
npm install playwright xlsx
```

---

Herhangi bir sorunla karşılaşırsanız, lütfen kodun başındaki açıklamaları ve hata mesajlarını kontrol edin.
