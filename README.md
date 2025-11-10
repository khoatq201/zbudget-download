# 📱 APK Download Website - Hướng Dẫn Setup

Website đơn giản để host file APK với thống kê lượt truy cập và lượt tải xuống bằng Google Analytics.

## 📋 Mục lục
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Setup Google Analytics](#setup-google-analytics)
- [Cấu hình website](#cấu-hình-website)
- [Deploy lên GitHub Pages](#deploy-lên-github-pages)
- [Xem thống kê](#xem-thống-kê)
- [Tùy chỉnh](#tùy-chỉnh)

---

## 📁 Cấu trúc dự án

```
apk-download-site/
├── index.html          # Trang web chính
├── style.css           # CSS styling
├── script.js           # JavaScript tracking
├── zbudget.apk        # File APK của bạn (thêm vào sau)
├── images/
│   └── app-icon.png   # Icon app (thêm vào sau)
└── README.md          # Hướng dẫn này
```

---

## 🔧 Setup Google Analytics

### Bước 1: Tạo tài khoản Google Analytics

1. Truy cập: https://analytics.google.com/
2. Đăng nhập bằng tài khoản Google
3. Click **"Start measuring"** hoặc **"Bắt đầu đo lường"**

### Bước 2: Tạo Account

1. **Account name**: Nhập tên (VD: "My Apps")
2. Tick các checkboxes
3. Click **"Next"** / **"Tiếp theo"**

### Bước 3: Tạo Property

1. **Property name**: Nhập tên (VD: "ZBudget Download Site")
2. **Reporting time zone**: Chọn **(GMT+07:00) Bangkok, Hanoi**
3. **Currency**: Chọn **Vietnamese Dong (₫)**
4. Click **"Next"**

### Bước 4: Thông tin doanh nghiệp

1. Chọn category và size
2. Chọn mục đích sử dụng
3. Click **"Create"**
4. Đồng ý với **Terms of Service**

### Bước 5: Setup Data Stream

1. Chọn **"Web"**
2. **Website URL**:
   - Nếu chưa deploy: nhập `https://yourusername.github.io`
   - Có thể cập nhật sau
3. **Stream name**: Nhập tên (VD: "ZBudget Website")
4. Click **"Create stream"**

### Bước 6: Lấy Measurement ID

1. Sau khi tạo, bạn sẽ thấy **Measurement ID** dạng: `G-XXXXXXXXXX`
2. **COPY MÃ NÀY** - rất quan trọng!

### Bước 7: Thêm vào website

1. Mở file `index.html`
2. Tìm **2 chỗ** có text `G-XXXXXXXXXX`
3. Thay thế bằng Measurement ID của bạn:

```html
<!-- Dòng 11 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>

<!-- Dòng 17 -->
gtag('config', 'G-ABC123XYZ');
```

**VÍ DỤ:**
- Measurement ID của bạn: `G-4B2KM7XYZ9`
- Thay thế: `G-XXXXXXXXXX` → `G-4B2KM7XYZ9`

---

## ⚙️ Cấu hình website

### 1. Thêm file APK

1. Copy file APK của bạn vào thư mục `apk-download-site/`
2. Đổi tên file thành `zbudget.apk` (hoặc tên khác)
3. Nếu dùng tên khác, cập nhật trong `index.html`:

```html
<!-- Dòng 65 -->
<a href="your-app-name.apk" class="download-btn" ...>
```

### 2. Thêm icon app

1. Chuẩn bị icon kích thước: **512x512px** hoặc **1024x1024px**
2. Đặt tên: `app-icon.png`
3. Lưu vào thư mục `images/`

**Nếu không có icon:**
- Website sẽ tự tạo icon placeholder với chữ "ZB"

### 3. Tùy chỉnh thông tin

Mở `index.html` và sửa các thông tin sau:

```html
<!-- Tên app (dòng 18) -->
<title>Tải ZBudget - Ứng Dụng Quản Lý Tài Chính</title>

<!-- Tên app (dòng 32) -->
<h1 class="app-name">ZBudget</h1>

<!-- Slogan (dòng 33) -->
<p class="app-tagline">Quản Lý Tài Chính Thông Minh</p>

<!-- Mô tả (dòng 36-38) -->
<p class="description">
    Ứng dụng giúp bạn theo dõi chi tiêu...
</p>

<!-- Thông tin phiên bản (dòng 74-89) -->
<div class="info-item">
    <span class="info-label">📦 Phiên bản</span>
    <span class="info-value">1.0.0</span> <!-- Sửa tại đây -->
</div>
```

---

## 🚀 Deploy lên GitHub Pages

### Phương pháp 1: Qua giao diện GitHub (Dễ nhất)

#### Bước 1: Tạo repository

1. Truy cập: https://github.com/new
2. **Repository name**: `zbudget-download` (hoặc tên khác)
3. Chọn **Public**
4. **KHÔNG** tick "Add a README file"
5. Click **"Create repository"**

#### Bước 2: Upload files

1. Trong repo vừa tạo, click **"uploading an existing file"**
2. Kéo thả TẤT CẢ các file:
   - `index.html`
   - `style.css`
   - `script.js`
   - `zbudget.apk` (file APK của bạn)
   - Thư mục `images/` (nếu có)
3. Commit message: `Initial commit`
4. Click **"Commit changes"**

#### Bước 3: Enable GitHub Pages

1. Vào tab **Settings** của repo
2. Sidebar trái → Click **"Pages"**
3. **Source**: Chọn `main` branch
4. **Folder**: Chọn `/ (root)`
5. Click **"Save"**
6. Đợi 1-2 phút
7. Website sẽ có tại: `https://yourusername.github.io/zbudget-download/`

### Phương pháp 2: Qua Git Command Line

```bash
# 1. Di chuyển vào thư mục dự án
cd apk-download-site

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. Commit
git commit -m "Initial commit - APK download site"

# 5. Đổi branch thành main
git branch -M main

# 6. Link với GitHub repo (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 7. Push lên GitHub
git push -u origin main

# 8. Enable GitHub Pages trong Settings như trên
```

### ⚠️ Lưu ý quan trọng về file APK

- GitHub giới hạn file **100MB**
- APK 68MB của bạn → **OK ✅**
- Nếu APK > 100MB → Dùng Git LFS hoặc host ở nơi khác

---

## 📊 Xem thống kê

### Truy cập Google Analytics Dashboard

1. Vào: https://analytics.google.com/
2. Chọn Property "ZBudget Download Site"
3. Dashboard sẽ hiển thị:

#### Real-time (Thời gian thực)
- Số người đang online
- Trang nào đang xem
- Từ đâu đến

#### Reports (Báo cáo)

**1. Lượt truy cập (Page Views)**
- Reports → Engagement → Pages and screens
- Xem tổng số lượt xem trang

**2. Lượt tải xuống (Downloads)**
- Reports → Engagement → Events
- Tìm event: `download_apk`
- Số lần event này được gọi = Số lượt tải

**3. Vị trí địa lý**
- Reports → User → Demographics → Geography
- Xem người dùng từ quốc gia/thành phố nào

**4. Thiết bị**
- Reports → Tech → Tech Details
- Xem người dùng dùng Mobile/Desktop
- Hệ điều hành, trình duyệt

**5. Nguồn truy cập**
- Reports → Acquisition → Traffic acquisition
- Xem người dùng đến từ:
  - Direct (nhập link trực tiếp)
  - Social (Facebook, Twitter...)
  - Referral (từ website khác)

### Các event được track tự động:

| Event | Mô tả | Xem ở đâu |
|-------|-------|-----------|
| `page_view` | Lượt truy cập trang | Reports → Engagement → Pages |
| `download_apk` | Lượt click download | Reports → Engagement → Events |
| `social_click` | Click social media | Reports → Engagement → Events |
| `time_on_page` | Thời gian ở lại trang | Reports → Engagement → Events |

### Tạo Dashboard tùy chỉnh

1. Vào **Explore** (sidebar trái)
2. Click **"Blank"** để tạo report mới
3. Thêm các metrics:
   - Total Users
   - Page Views
   - Event Count (download_apk)
4. Thêm dimensions: Date, Country, Device Category
5. Save dashboard

---

## 🎨 Tùy chỉnh

### Thay đổi màu sắc

Mở `style.css` và tìm các gradient:

```css
/* Gradient chính (dòng 9) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Gradient nút download (dòng 204) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Thay bằng màu khác, VD: */
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```

### Thêm tính năng mới

Các ý tưởng:
- QR Code để tải xuống dễ hơn
- Changelog (lịch sử cập nhật)
- Screenshots/Videos demo
- FAQ (câu hỏi thường gặp)
- Feedback form

### Thêm domain tùy chỉnh

1. Mua domain (VD: `zbudget.com`)
2. Trong repo Settings → Pages
3. **Custom domain**: Nhập domain của bạn
4. Cấu hình DNS:
   - Thêm CNAME record: `yourusername.github.io`

---

## 🐛 Troubleshooting (Xử lý lỗi)

### Không thấy thống kê trên Google Analytics

**Nguyên nhân:**
- Measurement ID chưa đúng
- Browser block tracking (AdBlock, Privacy Badger)
- Chưa có traffic

**Giải pháp:**
1. Kiểm tra lại Measurement ID trong `index.html`
2. Mở website trong Incognito/Private mode
3. Mở Console (F12) → Xem có lỗi JavaScript không
4. Đợi 24-48 giờ để data xuất hiện đầy đủ

### Download button không hoạt động

1. Kiểm tra tên file APK trong `index.html` phải khớp với tên file thật
2. File APK phải nằm cùng thư mục với `index.html`
3. File APK đã được push lên GitHub chưa

### Website không hiển thị trên GitHub Pages

1. Đợi 5-10 phút sau khi enable Pages
2. Kiểm tra Settings → Pages có thông báo "Your site is live" không
3. Clear browser cache (Ctrl + Shift + Delete)

---

## 📞 Hỗ trợ

### Tài nguyên hữu ích:

- **Google Analytics Help**: https://support.google.com/analytics
- **GitHub Pages Docs**: https://docs.github.com/pages
- **Web Analytics Guide**: https://analytics.google.com/analytics/academy/

### Check list trước khi deploy:

- [ ] Đã thay Measurement ID trong `index.html`
- [ ] Đã thêm file APK
- [ ] Đã thêm icon app (hoặc để placeholder)
- [ ] Đã sửa thông tin app (tên, mô tả, phiên bản)
- [ ] Đã test locally (mở `index.html` bằng browser)
- [ ] Đã push lên GitHub
- [ ] Đã enable GitHub Pages

---

## 📈 Mẹo tối ưu:

1. **SEO**: Thêm keywords vào meta tags để dễ tìm kiếm
2. **Share**: Tạo ảnh preview đẹp (Open Graph) khi share Facebook
3. **QR Code**: Tạo QR code link đến website để dễ share
4. **Update**: Thường xuyên cập nhật APK version mới
5. **Backup**: Backup file APK ở nhiều nơi

---

## ✅ Hoàn thành!

Website của bạn giờ đã:
- ✅ Host file APK miễn phí
- ✅ Đếm lượt truy cập
- ✅ Đếm lượt tải xuống
- ✅ Có giao diện đẹp, responsive
- ✅ Thống kê chi tiết với Google Analytics

**Link website:** `https://yourusername.github.io/zbudget-download/`

Chúc bạn thành công! 🎉
