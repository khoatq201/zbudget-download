// Track Download Event
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const appIcon = document.getElementById('appIcon');

    // Nếu không có icon, tạo placeholder
    if (!appIcon.src || appIcon.src.includes('app-icon.png')) {
        // Tạo icon placeholder với gradient
        createPlaceholderIcon();
    }

    // Track download button click
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Send event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download_apk', {
                    'event_category': 'APK',
                    'event_label': 'ZBudget APK Download',
                    'value': 1
                });

                console.log('✅ Download event tracked!');
            } else {
                console.warn('⚠️ Google Analytics not loaded yet');
            }

            // Visual feedback
            downloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                downloadBtn.style.transform = '';
            }, 200);

            // Show download notification
            showNotification('Đang tải xuống...', 'success');
        });
    }

    // Track page view (tự động bởi Google Analytics)
    if (typeof gtag !== 'undefined') {
        console.log('✅ Page view tracked automatically by Google Analytics');
    }

    // Load stats from Google Analytics (tùy chọn - cần Google Analytics Reporting API)
    // Hoặc bạn có thể xem trực tiếp trên dashboard Google Analytics
    loadStatsPlaceholder();
});

// Create placeholder icon nếu chưa có
function createPlaceholderIcon() {
    const appIcon = document.getElementById('appIcon');
    if (appIcon) {
        // Tạo canvas với gradient
        const canvas = document.createElement('canvas');
        canvas.width = 240;
        canvas.height = 240;
        const ctx = canvas.getContext('2d');

        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, 240, 240);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 240, 240);

        // Add text
        ctx.fillStyle = 'white';
        ctx.font = 'bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ZB', 120, 120);

        appIcon.src = canvas.toDataURL();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load stats placeholder
// LƯU Ý: Để có số liệu thật, bạn cần:
// 1. Dùng Google Analytics Dashboard trực tiếp
// 2. Hoặc tích hợp Google Analytics Reporting API (phức tạp hơn)
// 3. Hoặc dùng backend để lưu và hiển thị
function loadStatsPlaceholder() {
    const totalVisits = document.getElementById('totalVisits');
    const totalDownloads = document.getElementById('totalDownloads');

    // Giả lập loading
    if (totalVisits && totalDownloads) {
        totalVisits.classList.add('loading');
        totalDownloads.classList.add('loading');

        setTimeout(() => {
            // Placeholder numbers - thay bằng API call thật nếu có backend
            totalVisits.textContent = '-';
            totalDownloads.textContent = '-';

            totalVisits.classList.remove('loading');
            totalDownloads.classList.remove('loading');

            // Thêm tooltip
            totalVisits.title = 'Xem thống kê chi tiết trên Google Analytics Dashboard';
            totalDownloads.title = 'Xem thống kê chi tiết trên Google Analytics Dashboard';
        }, 1000);
    }
}

// Track outbound links (social media, etc.)
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
            const platform = this.getAttribute('title') || 'Social';
            gtag('event', 'social_click', {
                'event_category': 'Social',
                'event_label': platform,
                'value': 1
            });
        }
    });
});

// Track how long user stays on page
let startTime = new Date();
window.addEventListener('beforeunload', function() {
    if (typeof gtag !== 'undefined') {
        const duration = Math.round((new Date() - startTime) / 1000); // seconds
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': 'Time Spent',
            'value': duration
        });
    }
});

// Add console message
console.log('%c📊 Google Analytics Tracking Active!', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
console.log('%cEvents being tracked:', 'color: #2196F3; font-weight: bold;');
console.log('✅ Page Views (automatic)');
console.log('✅ APK Downloads');
console.log('✅ Social Media Clicks');
console.log('✅ Time on Page');
