# Almanca Dikte – kurulum rehberi

Bu klasörde iki uygulama var:

- `a1/` – A1 Rechtschreibung (Hör zu & schreib!)
- `a2/` – Rechtschreibungstest A2
- `index.html` – iki uygulamaya giden giriş sayfası

Uygulamalar telefona kurulabilir ve bir kez açıldıktan sonra internetsiz çalışır. Puanlar ve "Hatalarım" listesi yalnızca öğrencinin kendi cihazında saklanır; hiçbir veri dışarı gönderilmez.

## 1. İnternette yayınlama (GitHub Pages, ücretsiz)

Uygulamanın telefona kurulabilmesi için bir https adresinde yayında olması gerekir.

1. github.com'da oturum açın (hesabınız yoksa ücretsiz açabilirsiniz).
2. Sağ üstteki **+** düğmesinden **New repository** seçin. Ad olarak örneğin `almanca-dikte` yazın, **Public** seçili kalsın, **Create repository**'ye basın.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın.
4. Zip'ten çıkan klasörün **içindekileri** (`index.html`, `a1`, `a2`, `KURULUM.md`) sayfaya sürükleyin ve **Commit changes**'e basın.
5. **Settings → Pages** bölümüne gidin. **Source** olarak **Deploy from a branch**, branch olarak **main** ve **/ (root)** seçip **Save**'e basın.
6. Bir iki dakika sonra siteniz şu adreste açılır:
   - Giriş sayfası: `https://KULLANICI-ADINIZ.github.io/almanca-dikte/`
   - A1: `https://KULLANICI-ADINIZ.github.io/almanca-dikte/a1/`
   - A2: `https://KULLANICI-ADINIZ.github.io/almanca-dikte/a2/`

## 2. Öğrencilerle paylaşma

Uygulamayı açıp **Öğrencilerle paylaş** bölümündeki QR kodu tahtada gösterin. QR kod artık yayınladığınız adrese göre kendiliğinden oluşur.

## 3. Telefona kurma

- **Android (Chrome):** Uygulamayı açın, sağ üstteki **⋮** menüsünden **Uygulamayı yükle** ya da **Ana ekrana ekle**'yi seçin.
- **iPhone / iPad (Safari):** Uygulamayı açın, **Paylaş** düğmesine basın, **Ana Ekrana Ekle**'yi seçin.

Ana ekranda arılı **A1 Diktat** ve pembe **A2 Diktat** ikonları görünür.

## 4. İnternetsiz kullanım ve ses

- Uygulama ilk kez internetle açıldıktan sonra internetsiz de açılır.
- Sesli okuma telefonun kendi Almanca sesini kullanır. iPhone'da bu ses hazır gelir. Android'de ses çıkmazsa telefon ayarlarındaki **Metin okuma (TTS)** bölümünden Almanca ses paketini indirin; paket indikten sonra internetsiz de çalışır.

## 5. Bilmekte fayda var

- Claude'daki eski sayfalarda tutulan puanlar yeni uygulamaya taşınmaz, çünkü uygulamanın adresi değişti.
- iPhone'da ana ekrandan açılan uygulamanın puanları, Safari'de açılan sayfanınkinden ayrı tutulur.
- Kelime listesini değiştirmek isterseniz `a1/index.html` ya da `a2/index.html` dosyasını GitHub'da güncelleyin. Öğrenciler uygulamayı internete bağlıyken bir kez açtıktan sonra, bir sonraki açılışta yeni sürüm gelir.
