// スクロール時のアニメーション実行
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーション メニュー のトグル
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // ナビゲーション項目をクリックしたらメニューを閉じる
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // スクロール時にアニメーション要素を表示
    observeElements();

    // 画像クリック時にモーダルを表示
    setupImageModal();

    // スクロール時にナビゲーションバーのスタイルを変更
    window.addEventListener('scroll', updateNavbarOnScroll);
});

/**
 * Intersection Observer を使用してスクロール時のアニメーションを実行
 */
function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // すべてのギャラリーカードを監視
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        observer.observe(card);
    });

    // すべてのabout-cardを監視
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        // すでにアニメーションクラスがある場合はスキップ
        if (!card.classList.contains('slide-in-left') && !card.classList.contains('slide-in-right')) {
            observer.observe(card);
        }
    });
}

/**
 * 画像モーダルのセットアップ
 */
function setupImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const galleryImages = document.querySelectorAll('.gallery-image');

    if (!modal || !modalImg) return;

    // 画像クリック時にモーダルを表示
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.dataset.full || this.src;
            document.body.style.overflow = 'hidden'; // スクロール禁止
        });
    });

    // モーダルを閉じる（×ボタンクリック時）
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // モーダルを閉じる（モーダル背景をクリック時）
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // キーボード（Esc）でモーダルを閉じる
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // スクロール復帰
    }
}

/**
 * スクロール時のナビゲーションバー更新
 */
function updateNavbarOnScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 8px 25px rgba(45, 122, 111, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 15px rgba(45, 122, 111, 0.1)';
    }
}

/**
 * ページ読み込み時に各セクションのアニメーション初期化
 */
window.addEventListener('load', function() {
    // ヒーローセクションのテキストアニメーション
    const heroTitle = document.querySelector('.fade-in-title');
    const heroText = document.querySelector('.fade-in-text');

    if (heroTitle) {
        heroTitle.style.opacity = '1';
    }
    if (heroText) {
        heroText.style.opacity = '1';
    }
});

/**
 * セクション間スムーズスクロール
 * (HTMLのanchorで既に実装されているが、JavaScript確認用)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                // スムーズスクロールはHTMLのscroll-behaviorで実装
                // ここではナビゲーション メニュー を閉じるだけ
                const navMenu = document.getElementById('navMenu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});

console.log('清風高校 生物部 公式サイト - スクリプト読み込み完了');
