(function () {
  var isInitialized = false;
  
  function hideNative() {
    document.querySelectorAll('header:not(#aryn-header), footer:not(#aryn-footer)').forEach(function (el) {
      el.style.setProperty('display', 'none', 'important');
    });
  }

  function buildHeader() {
    if (document.getElementById('aryn-header')) return;
    var el = document.createElement('header');
    el.className = 'site-header';
    el.id = 'aryn-header';
    el.innerHTML = [
      '<div class="header-container">',
        '<a href="/" class="logo-wrapper">',
          '<span class="logo-icon">🐇</span>',
          '<span class="logo-text">ARYNBUN</span>',
        '</a>',
        '<nav class="nav-menu">',
          '<a href="/" class="nav-link">Shop</a>',
          '<a href="/collections/all" class="nav-link">All Products</a>',
          '<a href="/collections/apparel" class="nav-link">Apparel</a>',
          '<a href="/collections/accessories" class="nav-link">Accessories</a>',
        '</nav>',
        '<button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>',
      '</div>'
    ].join('');
    document.body.insertBefore(el, document.body.firstChild);
  }

  function buildFooter() {
    var existing = document.getElementById('aryn-footer');
    if (existing) existing.remove();
    var el = document.createElement('footer');
    el.className = 'site-footer';
    el.id = 'aryn-footer';
    el.innerHTML = [
      '<div class="footer-container">',
        '<div class="footer-section">',
          '<span class="footer-bunny">🐇</span>',
          '<span class="footer-title">ARYNBUN</span>',
          '<p>Love &amp; Art rule the world ✦</p>',
          '<p>A bunnyboi creating art, animations, and streaming joy.</p>',
        '</div>',
        '<div class="footer-section">',
          '<h3 class="footer-title">Quick Links</h3>',
          '<ul class="footer-links">',
            '<li><a href="/">Shop</a></li>',
            '<li><a href="/pages/returns-faq">Returns &amp; FAQ</a></li>',
            '<li><a href="https://arynbun.gay">Main Website</a></li>',
          '</ul>',
        '</div>',
        '<div class="footer-section">',
          '<h3 class="footer-title">Connect</h3>',
          '<div class="social-icons">',
            '<a href="https://twitch.tv/arynbun" class="social-icon" aria-label="Twitch">',
              '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">',
                '<path d="M3.75 1.5L2.25 5.25V19.5H6.75V22.5H9.75L12.75 19.5H16.5L21.75 14.25V1.5H3.75Z"/>',
              '</svg>',
            '</a>',
            '<a href="https://bsky.app/profile/arynbun.gay" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">',
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 530" fill="currentColor" width="22" height="22">',
                '<path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.698-7.896-.008-2.936-1.184.516-3.698 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.449-163.25-81.433C20.155 217.613 10 86.535 10 68.825c0-88.687 77.742-60.816 125.72-24.795z"/>',
              '</svg>',
            '</a>',
          '</div>',
        '</div>',
      '</div>',
      '<div class="footer-bottom">',
        '<p>© 2026 Arynbun. All rights reserved.',
        ' • <a href="/privacy">Privacy</a>',
        ' • <a href="/terms">Terms</a>',
        ' • Powered by <a href="https://fourthwall.com">Fourthwall</a>',
        '</p>',
      '</div>'
    ].join('');
    document.body.appendChild(el);
  }

  function init() {
    if (isInitialized) return;
    isInitialized = true;
    
    hideNative();
    buildHeader();
    buildFooter();
    
    // Mobile menu button
    var menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        var nav = document.querySelector('.nav-menu');
        if (nav) nav.classList.toggle('open');
      });
    }
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
