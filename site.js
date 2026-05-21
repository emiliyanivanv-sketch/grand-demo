/* ============================================
   Shared header/footer/JS for Гарант site
   ============================================ */

// ---------- Lucide-style inline SVG icons ----------
const icons = {
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.5a.6.6 0 0 1 1.04 0l2.31 4.68a.6.6 0 0 0 .46.33l5.16.75a.6.6 0 0 1 .33 1.02l-3.74 3.64a.6.6 0 0 0-.17.53l.88 5.14a.6.6 0 0 1-.87.63l-4.62-2.43a.6.6 0 0 0-.56 0L7.08 20.2a.6.6 0 0 1-.87-.63l.88-5.14a.6.6 0 0 0-.17-.53L3.18 10.28a.6.6 0 0 1 .33-1.02l5.16-.75a.6.6 0 0 0 .46-.33z"/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
};

// ---------- Header HTML ----------
function renderHeader(active = "") {
  const navItems = [
    { href: "index.html", label: "Начало", key: "home" },
    { href: "services.html", label: "Счетоводни услуги", key: "services" },
    { href: "online-services.html", label: "Онлайн услуги", key: "online" },
    { href: "registracia-na-firma.html", label: "Регистрация на фирми", key: "reg", badge: "Изгодно!" },
    { href: "prices.html", label: "Цени", key: "prices" },
    { href: "blog.html", label: "Блог", key: "blog" },
    { href: "contact.html", label: "За контакт", key: "contact" },
  ];

  const utilityItems = [
    { href: "za-nas.html", label: "За нас", key: "about" },
    { href: "karieri.html", label: "Кариери", key: "careers" },
    { href: "testimonials.html", label: "Отзиви", key: "testimonials" },
    { href: "team.html", label: "Екип", key: "team" },
    { href: "more.html", label: "Други услуги", key: "more" },
  ];

  return `
  <header class="site-header" id="siteHeader">
    <div class="utility-bar">
      <div class="container inner">
        <nav class="utility-nav">
          ${utilityItems.map(i => `<a href="${i.href}" class="${active === i.key ? "active" : ""}">${i.label}</a>`).join("")}
        </nav>
        <div class="utility-right">
          <a href="https://www.facebook.com/garantaccounting/" target="_blank" rel="noopener" class="fb-icon" aria-label="Facebook">
            ${icons.facebook}
          </a>
          <a href="#" class="lang-toggle" aria-label="English">EN</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="header-main">
        <a href="index.html" class="logo" aria-label="Счетоводна къща Гарант">
          <span class="logo-mark">Г</span>
          <span>
            <span>Гарант</span>
            <span class="logo-sub">Счетоводна къща</span>
          </span>
        </a>

        <button class="hamburger" id="hamburger" aria-label="Меню" aria-expanded="false">
          ${icons.menu}
        </button>
      </div>

      <nav class="main-nav" aria-label="Главно меню">
        <ul>
          ${navItems.map(i => `
            <li>
              <a href="${i.href}" class="${active === i.key ? "active" : ""}">
                ${i.label}
                ${i.badge ? `<span class="nav-badge">${i.badge}</span>` : ""}
              </a>
            </li>
          `).join("")}
        </ul>
      </nav>
    </div>

    <div class="mobile-nav" id="mobileNav" aria-hidden="true">
      <button class="close" id="mobileClose" aria-label="Затвори">${icons.close}</button>
      <ul>
        ${navItems.map(i => `<li><a href="${i.href}">${i.label}${i.badge ? ` <span class="nav-badge">${i.badge}</span>` : ""}</a></li>`).join("")}
      </ul>
      <div class="util">
        <strong style="color:var(--text);">Контакт</strong>
        <a href="tel:+359XXXXXXXXX">📞 0XXX XXX XXX — Управител</a>
        <a href="tel:+359XXXXXXXXX">📞 0XXX XXX XXX — Счетоводител</a>
        <a href="mailto:office@example.com">✉ office@example.com</a>
      </div>
    </div>
  </header>`;
}

// ---------- Footer HTML ----------
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-mark">Г</span>
            <span>
              <span>Гарант</span>
              <span class="logo-sub">Счетоводна къща</span>
            </span>
          </a>
          <p>Счетоводна къща в Пловдив от 2009 г. Цялостно счетоводно и юридическо обслужване за малки и средни фирми, самоосигуряващи се лица и стартиращи бизнеси.</p>
          <a href="https://www.google.com/search?q=Счетоводна+къща+Гарант+Пловдив" target="_blank" rel="noopener" class="footer-rating">
            <span class="stars">${icons.star}</span>
            <strong style="color:#fff;">4.8</strong>
            <span style="color:#9ca3af;">от 113 Google отзива</span>
          </a>
        </div>
        <div>
          <h4>Услуги</h4>
          <ul class="footer-list">
            <li><a href="services.html">Счетоводно обслужване</a></li>
            <li><a href="online-services.html">Онлайн услуги</a></li>
            <li><a href="registracia-na-firma.html">Регистрация на фирми</a></li>
            <li><a href="prices.html">Цени</a></li>
            <li><a href="more.html">Други услуги</a></li>
          </ul>
        </div>
        <div>
          <h4>Кантора</h4>
          <ul class="footer-list">
            <li><a href="za-nas.html">За нас</a></li>
            <li><a href="team.html">Екип</a></li>
            <li><a href="testimonials.html">Отзиви</a></li>
            <li><a href="karieri.html">Кариери</a></li>
            <li><a href="blog.html">Блог</a></li>
          </ul>
        </div>
        <div>
          <h4>Контакт</h4>
          <ul class="footer-list">
            <li><span>гр. Пловдив</span></li>
            <li><a href="tel:+359XXXXXXXXX">0XXX XXX XXX — Управител</a></li>
            <li><a href="tel:+359XXXXXXXXX">0XXX XXX XXX — Счетоводител</a></li>
            <li><a href="mailto:office@example.com">office@example.com</a></li>
            <li><span>Пон–Пет 8:30–17:30</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2009–2026 Счетоводна къща Гарант ЕООД. Всички права запазени.</span>
        <div class="footer-socials">
          <a href="https://www.facebook.com/garantaccounting/" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook}</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// ---------- Floating contact widget ----------
function renderFloatingContact() {
  return `
  <div class="floating-contact" aria-label="Бързи контакти">
    <span class="label">Свържете се с нас</span>
    <a href="tel:+359XXXXXXXXX" class="pill green">
      ${icons.phone}
      <span>0XXX XXX XXX</span>
    </a>
    <a href="tel:+359XXXXXXXXX" class="pill blue">
      ${icons.phone}
      <span>0XXX XXX XXX</span>
    </a>
  </div>`;
}

// ---------- Boot ----------
function bootSite(activeKey) {
  // Inject header/footer placeholders
  const headerSlot = document.getElementById("siteHeaderSlot");
  const footerSlot = document.getElementById("siteFooterSlot");
  const floatingSlot = document.getElementById("floatingContactSlot");
  if (headerSlot) headerSlot.innerHTML = renderHeader(activeKey);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
  if (floatingSlot) floatingSlot.innerHTML = renderFloatingContact();

  // Sticky header shadow on scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  const mobileClose = document.getElementById("mobileClose");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.add("open");
      mobileNav.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  }
  if (mobileClose && mobileNav) {
    const closeNav = () => {
      mobileNav.classList.remove("open");
      mobileNav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    mobileClose.addEventListener("click", closeNav);
    mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));
  }

  // Scroll-reveal observer
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  }

  // Lazy-load images (native loading=lazy is on each img; this just ensures fade-in)
  document.querySelectorAll("img[loading='lazy']").forEach(img => {
    img.style.transition = "opacity 0.4s ease";
    if (!img.complete) {
      img.style.opacity = "0";
      img.addEventListener("load", () => img.style.opacity = "1", { once: true });
    }
  });
}
