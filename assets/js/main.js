/* ============================================================================
   DAFTAR ISI
   0.  DATA           — SKILLS, LANGUAGES, CERTS, FIELDS, CONTACTS
   1.  BAHASA (i18n)
   2.  MASKOT ROBOT
   3.  INTRO — frame logo 4 detik + audio, lalu hero muncul
   4.  HERO — teks mengetik & starfield
   5.  HEADER (scroll shadow)
   6.  PENCARIAN
   7.  MENU HAMBURGER
   8.  SLIDESHOW KENANGAN
   9.  KARTU BIO GANTUNG (fisika lanyard)
   10. MARQUEE SKILL — dikelompokkan Frontend / Backend
   11. RENDER PROJECT, BAHASA, SERTIFIKAT, BIDANG, IKON KONTAK HERO
   12. REVEAL ON SCROLL
   ============================================================================ */
(function () {
  "use strict";

  /* ==========================================================================
     0. DATA
     ========================================================================== */
  var SKILLS = [
    { key: "html", name: "HTML", level: 30, trend: [5, 12, 20, 30], category: "frontend", badge: { bg: "#E34F26", fg: "#fff", label: "5" } },
    { key: "css", name: "CSS", level: 30, trend: [5, 12, 20, 30], category: "frontend", badge: { bg: "#2965F1", fg: "#fff", label: "3" } },
    { key: "js", name: "JavaScript", level: 10, trend: [2, 4, 7, 10], category: "frontend", badge: { bg: "#F0DB4F", fg: "#1a1a1a", label: "JS" } },
    { key: "ts", name: "TypeScript", level: 0, trend: [0, 0, 0, 0], category: "frontend", badge: { bg: "#3178C6", fg: "#fff", label: "TS" } },
    { key: "py", name: "Python", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#3776AB", fg: "#fff", label: "Py" } },
    { key: "java", name: "Java", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#ED8B00", fg: "#fff", label: "J" } },
    { key: "c", name: "C", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#A8B9CC", fg: "#1a1a1a", label: "C" } },
    { key: "cpp", name: "C++", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#00599C", fg: "#fff", label: "C++" } },
    { key: "csharp", name: "C#", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#68217A", fg: "#fff", label: "C#" } },
    { key: "php", name: "PHP", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#777BB4", fg: "#fff", label: "php" } },
    { key: "ruby", name: "Ruby", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#CC342D", fg: "#fff", label: "Rb" } },
    { key: "go", name: "Go", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#00ADD8", fg: "#fff", label: "Go" } },
    { key: "rust", name: "Rust", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#DEA584", fg: "#1a1a1a", label: "Rs" } },
    { key: "swift", name: "Swift", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#FA7343", fg: "#fff", label: "Sw" } },
    { key: "kotlin", name: "Kotlin", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#7F52FF", fg: "#fff", label: "K" } },
    { key: "dart", name: "Dart", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#0175C2", fg: "#fff", label: "Dt" } },
    { key: "sql", name: "SQL", level: 0, trend: [0, 0, 0, 0], category: "backend", badge: { bg: "#4479A1", fg: "#fff", label: "DB" } },
  ];

  var LANGUAGES = [
    { flag: "🇮🇩", name: "Indonesia", levelPercent: 100, levelLabel: null },
    { flag: "🇬🇧", name: "English", levelPercent: 20, levelLabel: null },
    { flag: "🇯🇵", name: "日本語 (Jepang)", levelPercent: 40, levelLabel: "N4" },
  ];

  var CERTS = [];
  var FIELDS = [];

  var CONTACTS = [
    { icon: "💬", label: "WhatsApp", href: "https://wa.me/6287817567212" },
    { icon: "📸", label: "Instagram", href: "https://www.instagram.com/restunurrokhman?igsh=MTZmaGh6dDdvOTlnaA==" },
    { icon: "✉️", label: "Email", href: "mailto:restunurrohman57@gmail.com" },
  ];

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================================
     1. BAHASA (i18n)
     ========================================================================== */
  var TRANSLATIONS = {
    id: {
      flag: "🇮🇩", scrollHint: "Scroll untuk melihat lebih ↓", navHero: "Beranda",
      heroBadge: "Terbuka untuk Kolaborasi", heroRolePrefix: "Saya seorang", heroRole: "Pelajar IT",
      heroDesc: "Belajar membangun web modern, dari tampilan sampai logikanya.",
      heroBtnProject: "Lihat Project →",
      motoQuote: "“Diam bukan perilaku yang buruk, tapi sedang mencari kesempatan untuk kesuksesan, seperti sedang mengasah pedang sampai tidak sadar membelah lautan.”",
      eyebrowBackground: "Latar", headingBackground: "Jejak & cerita",
      bioHint: "Tarik / klik kartunya", bioNama: "Nama", bioUmur: "Umur", bioTahun: "tahun",
      bioStatus: "Status", bioStatusValue: "Pelajar", bioTujuan: "Tujuan",
      eyebrowSkill: "Kemampuan", headingSkill: "Skill",
      subheadProgramming: "Bahasa Pemrograman", groupFrontend: "Frontend Development", groupBackend: "Backend & Languages",
      subheadLanguage: "Bahasa", subheadCert: "Sertifikat Bahasa", subheadField: "Job / Bidang",
      certEmpty: "Belum ada sertifikat.", fieldEmpty: "Belum ditentukan.",
      skillHint: "Klik salah satu ikon atau kartu untuk menyorotnya di tengah.", skillLevelLabel: "Tingkatan",
      eyebrowProject: "Hasil karya", headingProject: "Project",
      footerNote: "© 2026 Restu Nurrokhman — dibangun dengan HTML, CSS &amp; JS.",
      projectLinkLabel: "Lihat project →",
      projects: [{ title: "Portofolio v1", desc: "Salah satu project yang sudah aku deploy — lihat langsung hasilnya.", link: "https://exquisite-boba-89cc42.netlify.app/" }],
      searchPlaceholder: "Cari skill / project…",
    },
    en: {
      flag: "🇬🇧", scrollHint: "Scroll to see more ↓", navHero: "Home",
      heroBadge: "Open for Collaboration", heroRolePrefix: "I'm a", heroRole: "IT Student",
      heroDesc: "Learning to build modern web apps, from the interface down to the logic.",
      heroBtnProject: "View Projects →",
      motoQuote: "“Silence isn't a bad habit — it's a search for the opportunity to succeed, like sharpening a sword without noticing it has already parted the sea.”",
      eyebrowBackground: "Background", headingBackground: "Journey & story",
      bioHint: "Drag / click the card", bioNama: "Name", bioUmur: "Age", bioTahun: "years old",
      bioStatus: "Status", bioStatusValue: "Student", bioTujuan: "Goal",
      eyebrowSkill: "Skills", headingSkill: "Skills",
      subheadProgramming: "Programming Languages", groupFrontend: "Frontend Development", groupBackend: "Backend & Languages",
      subheadLanguage: "Languages", subheadCert: "Language Certificates", subheadField: "Job / Field",
      certEmpty: "No certificates yet.", fieldEmpty: "Not decided yet.",
      skillHint: "Click an icon or card to bring it to the center.", skillLevelLabel: "Level",
      eyebrowProject: "Work", headingProject: "Projects",
      footerNote: "© 2026 Restu Nurrokhman — built with HTML, CSS &amp; JS.",
      projectLinkLabel: "View project →",
      projects: [{ title: "Portfolio v1", desc: "One of the projects I've already deployed — check it out live.", link: "https://exquisite-boba-89cc42.netlify.app/" }],
      searchPlaceholder: "Search skill / project…",
    },
    ja: {
      flag: "🇯🇵", scrollHint: "スクロールして見る ↓", navHero: "ホーム",
      heroBadge: "コラボレーション募集中", heroRolePrefix: "職業:", heroRole: "IT学生",
      heroDesc: "見た目からロジックまで、モダンなWebアプリの作り方を学んでいます。",
      heroBtnProject: "プロジェクトを見る →",
      motoQuote: "「沈黙は悪い態度ではなく、成功の機会を探しているだけ。まるで剣を研ぎ続けるうちに、気づかぬまま海を切り開くように。」",
      eyebrowBackground: "背景", headingBackground: "軌跡と物語",
      bioHint: "カードをドラッグ／クリック", bioNama: "名前", bioUmur: "年齢", bioTahun: "歳",
      bioStatus: "ステータス", bioStatusValue: "学生", bioTujuan: "目標",
      eyebrowSkill: "スキル", headingSkill: "スキル",
      subheadProgramming: "プログラミング言語", groupFrontend: "フロントエンド開発", groupBackend: "バックエンド＆言語",
      subheadLanguage: "言語", subheadCert: "語学認定資格", subheadField: "職種 / 分野",
      certEmpty: "まだ資格はありません。", fieldEmpty: "まだ未定です。",
      skillHint: "アイコンまたはカードをクリックすると中央に表示されます。", skillLevelLabel: "レベル",
      eyebrowProject: "実績", headingProject: "プロジェクト",
      footerNote: "© 2026 Restu Nurrokhman — HTML、CSS、JSで制作。",
      projectLinkLabel: "プロジェクトを見る →",
      projects: [{ title: "ポートフォリオ v1", desc: "すでに公開しているプロジェクトのひとつです。実際に見てみてください。", link: "https://exquisite-boba-89cc42.netlify.app/" }],
      searchPlaceholder: "スキル・プロジェクトを検索…",
    },
    zh: {
      flag: "🇨🇳", scrollHint: "向下滚动查看更多 ↓", navHero: "首页",
      heroBadge: "欢迎合作", heroRolePrefix: "我是一名", heroRole: "IT专业学生",
      heroDesc: "正在学习构建现代网页应用，从界面到逻辑。",
      heroBtnProject: "查看项目 →",
      motoQuote: "「沉默不是坏习惯,而是在寻找成功的机会,就像不断磨剑,不知不觉间劈开了大海。」",
      eyebrowBackground: "背景", headingBackground: "足迹与故事",
      bioHint: "拖动／点击卡片", bioNama: "姓名", bioUmur: "年龄", bioTahun: "岁",
      bioStatus: "状态", bioStatusValue: "学生", bioTujuan: "目标",
      eyebrowSkill: "技能", headingSkill: "技能",
      subheadProgramming: "编程语言", groupFrontend: "前端开发", groupBackend: "后端与语言",
      subheadLanguage: "语言", subheadCert: "语言证书", subheadField: "职业 / 领域",
      certEmpty: "暂无证书。", fieldEmpty: "尚未确定。",
      skillHint: "点击图标或卡片可将其居中显示。", skillLevelLabel: "级别",
      eyebrowProject: "作品", headingProject: "项目",
      footerNote: "© 2026 Restu Nurrokhman — 使用 HTML、CSS 和 JS 构建。",
      projectLinkLabel: "查看项目 →",
      projects: [{ title: "作品集 v1", desc: "我已经部署的项目之一 — 点击查看实际效果。", link: "https://exquisite-boba-89cc42.netlify.app/" }],
      searchPlaceholder: "搜索技能／项目…",
    },
  };

  var currentLang = "id";

  function applyLanguage(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.innerHTML = t[key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (t[key] != null) el.setAttribute("title", t[key]);
    });
    var searchInput = document.getElementById("search-input");
    if (searchInput && t.searchPlaceholder) searchInput.setAttribute("placeholder", t.searchPlaceholder);

    var flagEl = document.getElementById("lang-current-flag");
    if (flagEl) flagEl.textContent = t.flag;
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
    document.querySelectorAll(".skill-progress-label").forEach(function (el) {
      el.textContent = t.skillLevelLabel + " — " + el.dataset.level + "%";
    });

    renderProjects(t.projects, t.projectLinkLabel);
    renderCerts(t.certEmpty);
    renderFields(t.fieldEmpty);

    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  }

  var langToggleBtn = document.getElementById("lang-toggle");
  var langMenu = document.getElementById("lang-menu");
  langToggleBtn.addEventListener("click", function () { langMenu.classList.toggle("is-open"); });
  langMenu.querySelectorAll(".lang-option").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.dataset.lang);
      langMenu.classList.remove("is-open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-switcher")) langMenu.classList.remove("is-open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") langMenu.classList.remove("is-open");
  });

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem("portfolio-lang"); } catch (e) {}
    applyLanguage(saved && TRANSLATIONS[saved] ? saved : "id");
  }

  /* ==========================================================================
     2. MASKOT ROBOT
     ========================================================================== */
  var mascot = document.getElementById("robot-mascot");
  mascot.addEventListener("click", function () {
    mascot.style.animation = "none";
    mascot.style.transform = "rotate(0deg) scale(1.3)";
    window.setTimeout(function () { mascot.style.transform = ""; mascot.style.animation = ""; }, 260);
  });

  /* ==========================================================================
     3. INTRO — frame logo 4 detik + audio
     ========================================================================== */
  var pageIntro = document.getElementById("pageIntro");
  var introCanvas = document.getElementById("introCanvas");
  var introCtx = introCanvas.getContext("2d");
  var introAudio = document.getElementById("introAudio");
  var introSkipBtn = document.getElementById("introSkip");
  var heroContent = document.getElementById("heroContent");

  var TOTAL_INTRO_FRAMES = 96;
  var INTRO_DURATION = 4000;

  function introFramePath(i) {
    return "assets/frames/frame-" + String(i + 1).padStart(4, "0") + ".jpg";
  }
  var introImages = new Array(TOTAL_INTRO_FRAMES).fill(null);
  var introLastGood = null;

  function loadIntroFrame(index) {
    return new Promise(function (resolve) {
      if (introImages[index]) return resolve();
      var img = new Image();
      img.decoding = "async";
      img.src = introFramePath(index);
      function finish() { introImages[index] = img; resolve(); }
      if (img.decode) img.decode().then(finish).catch(finish);
      else { img.onload = finish; img.onerror = finish; }
    });
  }
  function getIntroFrame(index) {
    var clamped = Math.max(0, Math.min(TOTAL_INTRO_FRAMES - 1, index));
    if (introImages[clamped]) return introImages[clamped];
    for (var o = 1; o < TOTAL_INTRO_FRAMES; o++) {
      var lo = clamped - o, hi = clamped + o;
      if (lo >= 0 && introImages[lo]) return introImages[lo];
      if (hi < TOTAL_INTRO_FRAMES && introImages[hi]) return introImages[hi];
    }
    return null;
  }
  async function preloadIntro() {
    await loadIntroFrame(0);
    var queue = [];
    for (var i = 1; i < TOTAL_INTRO_FRAMES; i++) queue.push(i);
    var cursor = 0;
    async function worker() { while (cursor < queue.length) await loadIntroFrame(queue[cursor++]); }
    await Promise.all([worker(), worker(), worker(), worker()]);
  }

  function resizeIntroCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    introCanvas.width = Math.floor(window.innerWidth * dpr);
    introCanvas.height = Math.floor(window.innerHeight * dpr);
  }

  function drawIntroFrame(index) {
    var bitmap = getIntroFrame(index);
    if (bitmap && bitmap.naturalWidth) introLastGood = bitmap;
    var toDraw = bitmap && bitmap.naturalWidth ? bitmap : introLastGood;
    var w = introCanvas.width, h = introCanvas.height;
    introCtx.fillStyle = "#05060a";
    introCtx.fillRect(0, 0, w, h);
    if (toDraw) {
      var scale = Math.max(w / toDraw.naturalWidth, h / toDraw.naturalHeight);
      var dw = toDraw.naturalWidth * scale, dh = toDraw.naturalHeight * scale;
      introCtx.drawImage(toDraw, (w - dw) / 2, (h - dh) / 2, dw, dh);
    }
  }

  var introFinished = false;
  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    try { introAudio.pause(); } catch (e) {}
    pageIntro.classList.add("is-done");
    heroContent.classList.add("is-visible");
    window.setTimeout(function () { pageIntro.classList.add("is-hidden"); }, 550);
  }

  function playIntro() {
    resizeIntroCanvas();
    window.addEventListener("resize", resizeIntroCanvas);
    preloadIntro();

    // Audio otomatis kadang diblokir browser tanpa interaksi user — kalau
    // gagal, animasi frame tetap jalan tanpa suara (tidak memblokir intro).
    introAudio.play().catch(function () {});

    var startTs = null;
    function step(ts) {
      if (introFinished) return;
      if (startTs === null) startTs = ts;
      var elapsed = ts - startTs;
      var progress = Math.min(1, elapsed / INTRO_DURATION);
      var index = Math.round(progress * (TOTAL_INTRO_FRAMES - 1));
      drawIntroFrame(index);
      if (progress < 1) requestAnimationFrame(step);
      else finishIntro();
    }
    requestAnimationFrame(step);
  }

  introSkipBtn.addEventListener("click", finishIntro);

  if (reduced) {
    finishIntro();
  } else {
    playIntro();
  }

  /* ==========================================================================
     4. HERO — teks mengetik & starfield
     ========================================================================== */
  var typedEl = document.getElementById("typedGreeting");
  var TYPE_PHRASES = ["Selamat datang, gw", "Welcome, I'm", "ようこそ、僕は", "欢迎，我是"];
  function runTypewriter() {
    var phraseIndex = 0, charIndex = 0, deleting = false;
    function tick() {
      var current = TYPE_PHRASES[phraseIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) { deleting = true; window.setTimeout(tick, 1300); return; }
        window.setTimeout(tick, 85);
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % TYPE_PHRASES.length; window.setTimeout(tick, 350); return; }
        window.setTimeout(tick, 40);
      }
    }
    tick();
  }
  if (reduced) typedEl.textContent = TYPE_PHRASES[0];
  else runTypewriter();

  (function starfield() {
    var sf = document.getElementById("starfield");
    var sctx = sf.getContext("2d");
    var stars = [];
    var STAR_COUNT = 140;
    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      sf.width = sf.parentElement.clientWidth * dpr;
      sf.height = sf.parentElement.clientHeight * dpr;
      if (!stars.length) {
        for (var i = 0; i < STAR_COUNT; i++) {
          stars.push({ x: Math.random() * sf.width, y: Math.random() * sf.height, r: Math.random() * 1.6 + 0.4, speed: Math.random() * 0.4 + 0.15, twinkle: Math.random() * Math.PI * 2 });
        }
      }
    }
    resize();
    window.addEventListener("resize", resize);
    function frame() {
      sctx.clearRect(0, 0, sf.width, sf.height);
      stars.forEach(function (s) {
        s.x -= s.speed;
        if (s.x < -2) s.x = sf.width + 2;
        s.twinkle += 0.02;
        var alpha = 0.4 + Math.sin(s.twinkle) * 0.35;
        sctx.beginPath();
        sctx.fillStyle = "rgba(237,232,224," + Math.max(0.1, alpha) + ")";
        sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        sctx.fill();
      });
      if (!reduced) requestAnimationFrame(frame);
    }
    frame();
  })();

  /* ==========================================================================
     5. HEADER — shadow saat scroll
     ========================================================================== */
  var header = document.getElementById("site-header");
  var scrollScheduled = false;
  window.addEventListener("scroll", function () {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(function () {
      scrollScheduled = false;
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    });
  }, { passive: true });

  /* ==========================================================================
     6. PENCARIAN
     ========================================================================== */
  var searchBtn = document.getElementById("search-btn");
  var searchInput = document.getElementById("search-input");
  searchBtn.addEventListener("click", function () {
    searchInput.classList.toggle("is-open");
    if (searchInput.classList.contains("is-open")) searchInput.focus();
    else { searchInput.value = ""; runSearch(""); }
  });
  function runSearch(query) {
    var q = query.trim().toLowerCase();
    document.querySelectorAll(".skill-card, .project-card").forEach(function (card) {
      if (!q) { card.style.opacity = ""; card.style.filter = ""; return; }
      var match = card.textContent.toLowerCase().indexOf(q) !== -1;
      card.style.opacity = match ? "1" : "0.18";
      card.style.filter = match ? "" : "saturate(0.4)";
    });
  }
  searchInput.addEventListener("input", function () { runSearch(searchInput.value); });

  /* ==========================================================================
     7. MENU HAMBURGER
     ========================================================================== */
  var hamburgerBtn = document.getElementById("hamburger-btn");
  var panel = document.getElementById("hamburger-panel");
  var overlay = document.getElementById("panel-overlay");
  function openPanel() {
    panel.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburgerBtn.classList.add("hamburger-btn-active");
    panel.setAttribute("aria-hidden", "false");
  }
  function closePanel() {
    panel.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburgerBtn.classList.remove("hamburger-btn-active");
    panel.setAttribute("aria-hidden", "true");
  }
  hamburgerBtn.addEventListener("click", function () {
    panel.classList.contains("is-open") ? closePanel() : openPanel();
  });
  overlay.addEventListener("click", closePanel);
  panel.querySelectorAll("[data-close-panel]").forEach(function (l) { l.addEventListener("click", closePanel); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });

  /* ==========================================================================
     8. SLIDESHOW KENANGAN
     ========================================================================== */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".memory-slide"));
  var dotsWrap = document.getElementById("slideshow-dots");
  var slideIndex = 0;
  slides.forEach(function (_, i) {
    var dot = document.createElement("span");
    if (i === 0) dot.classList.add("is-active");
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);
  function showSlide(i) {
    slides[slideIndex].classList.remove("is-active");
    dots[slideIndex].classList.remove("is-active");
    slideIndex = i % slides.length;
    slides[slideIndex].classList.add("is-active");
    dots[slideIndex].classList.add("is-active");
  }
  if (slides.length > 1 && !reduced) {
    window.setInterval(function () { showSlide(slideIndex + 1); }, 4500);
  }

  /* ==========================================================================
     9. KARTU BIO GANTUNG — fisika lanyard
     ----------------------------------------------------------------------------
     PENTING: tali cuma bisa MENARIK saat teregang, TIDAK PERNAH mendorong
     saat kendur — kalau kebalik, kartu mental jauh ke atas lalu hilang kena
     overflow:hidden (bug lama, sudah diperbaiki).
     ========================================================================== */
  var stage = document.getElementById("bioCardStage");
  var dragWrapper = document.getElementById("bioDragWrapper");
  var card3d = document.getElementById("bioCard3d");
  var strapPath = document.getElementById("bioStrapPath");

  var REST_LENGTH = 130;
  var SPRING_K = 0.08;
  var GRAVITY = 0.7;
  var DAMPING = 0.9;
  var CARD_WIDTH = 220;

  var anchorX = 150;
  var anchorY = -8;
  var pos = { x: anchorX, y: anchorY - 260 };
  var vel = { x: 0, y: 0 };
  var rotationAngle = 0;
  var isDragging = false;
  var dragOffsetX = 0, dragOffsetY = 0;
  var clickStartX = 0, clickStartY = 0, timeDown = 0;
  var flipTimeout = null;
  var physicsStarted = false;
  var physicsSettled = false;

  function measureStage() {
    var r = stage.getBoundingClientRect();
    anchorX = r.width / 2;
  }
  measureStage();
  window.addEventListener("resize", measureStage);

  function handleAutoFlip() {
    if (flipTimeout) clearTimeout(flipTimeout);
    if (card3d.classList.contains("is-flipped")) {
      flipTimeout = setTimeout(function () { card3d.classList.remove("is-flipped"); }, 4000);
    }
  }

  function updatePhysics() {
    var dx = pos.x - anchorX;
    var dy = pos.y - anchorY;
    var dist = Math.sqrt(dx * dx + dy * dy);

    if (!isDragging) {
      if (dist > 0.1) {
        var springForce = Math.max(0, dist - REST_LENGTH) * SPRING_K;
        var nx = dx / dist, ny = dy / dist;
        vel.x -= nx * springForce;
        vel.y -= ny * springForce;
      }
      vel.y += GRAVITY;
      vel.x *= DAMPING;
      vel.y *= DAMPING;
      pos.x += vel.x;
      pos.y += vel.y;
    }

    var targetRotation = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
    var velTilt = vel.x * 1.5;
    if (isDragging) rotationAngle += (targetRotation - rotationAngle) * 0.4;
    else rotationAngle += (targetRotation + velTilt - rotationAngle) * 0.12;

    var slack = Math.max(0, REST_LENGTH - dist);
    var cp1X = anchorX + (pos.x - anchorX) * 0.2;
    var cp1Y = anchorY + (pos.y - anchorY) * 0.5 + slack * 0.8;
    var cp2X = pos.x - vel.x * 3;
    var cp2Y = pos.y - 30 + slack * 0.4;

    dragWrapper.style.transform = "translate(" + (pos.x - CARD_WIDTH / 2) + "px, " + pos.y + "px) rotate(" + rotationAngle + "deg)";
    strapPath.setAttribute("d", "M " + anchorX + " " + anchorY + " C " + cp1X + " " + cp1Y + ", " + cp2X + " " + cp2Y + ", " + pos.x + " " + pos.y);

    var speed = Math.abs(vel.x) + Math.abs(vel.y);
    if (!isDragging && speed < 0.02 && dist < REST_LENGTH + 2) { physicsSettled = true; return; }
    physicsSettled = false;
    requestAnimationFrame(updatePhysics);
  }

  function wakePhysics() {
    if (physicsSettled) { physicsSettled = false; requestAnimationFrame(updatePhysics); }
  }

  function startPhysics() {
    if (physicsStarted) return;
    physicsStarted = true;
    measureStage();
    pos.x = anchorX;
    if (reduced) pos.y = anchorY + REST_LENGTH + 60;
    stage.classList.add("is-armed");
    updatePhysics();
  }

  function localPoint(clientX, clientY) {
    var rect = stage.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }
  function onPointerDown(e) {
    isDragging = true;
    wakePhysics();
    var clientX = e.clientX != null ? e.clientX : e.touches[0].clientX;
    var clientY = e.clientY != null ? e.clientY : e.touches[0].clientY;
    var p = localPoint(clientX, clientY);
    dragOffsetX = p.x - pos.x;
    dragOffsetY = p.y - pos.y;
    clickStartX = p.x; clickStartY = p.y; timeDown = performance.now();
    vel = { x: 0, y: 0 };
    if (flipTimeout) clearTimeout(flipTimeout);
  }
  function onPointerMove(e) {
    if (!isDragging) return;
    var clientX = e.clientX != null ? e.clientX : (e.touches && e.touches[0].clientX);
    var clientY = e.clientY != null ? e.clientY : (e.touches && e.touches[0].clientY);
    if (clientX == null) return;
    var p = localPoint(clientX, clientY);
    pos.x = p.x - dragOffsetX;
    pos.y = p.y - dragOffsetY;
  }
  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    var clientX = e.clientX != null ? e.clientX : (e.changedTouches && e.changedTouches[0].clientX);
    var clientY = e.clientY != null ? e.clientY : (e.changedTouches && e.changedTouches[0].clientY);
    var p = localPoint(clientX, clientY);
    var moveDist = Math.abs(p.x - clickStartX) + Math.abs(p.y - clickStartY);
    var duration = performance.now() - timeDown;
    if (moveDist < 30 || (duration < 250 && moveDist < 60)) card3d.classList.toggle("is-flipped");
    handleAutoFlip();
  }
  dragWrapper.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  dragWrapper.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { startPhysics(); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(stage);
  } else {
    startPhysics();
  }

  /* ==========================================================================
     10. MARQUEE SKILL
     ========================================================================== */
  function buildChartSVG(trend) {
    var max = Math.max.apply(null, trend), min = Math.min.apply(null, trend);
    var range = Math.max(1, max - min);
    var padX = 4, padY = 8, W = 100, H = 56;
    var pts = trend.map(function (v, i) {
      var x = padX + (i / (trend.length - 1)) * (W - padX * 2);
      var y = H - padY - ((v - min) / range) * (H - padY * 2);
      return [x, y];
    });
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += " C" + c1x + "," + c1y + " " + c2x + "," + c2y + " " + p2[0] + "," + p2[1];
    }
    var areaD = d + " L" + pts[pts.length - 1][0] + "," + H + " L" + pts[0][0] + "," + H + " Z";
    var dots2 = pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" style="fill:var(--accent)" />'; }).join("");
    var uid = "sg" + Math.random().toString(36).slice(2, 8);
    return (
      '<svg class="skill-chart" viewBox="0 0 100 56" preserveAspectRatio="none">' +
      '<defs><linearGradient id="' + uid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" style="stop-color:var(--accent)" stop-opacity="0.35" />' +
      '<stop offset="100%" style="stop-color:var(--accent)" stop-opacity="0" />' +
      "</linearGradient></defs>" +
      '<path d="' + areaD + '" fill="url(#' + uid + ')" stroke="none" />' +
      '<path d="' + d + '" fill="none" style="stroke:var(--accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />' +
      dots2 + "</svg>"
    );
  }
  function buildSkillCard(skill) {
    var el = document.createElement("div");
    el.className = "skill-card";
    el.dataset.skill = skill.key;
    el.innerHTML =
      "<h3>" + skill.name + "</h3>" +
      '<div class="skill-progress-track"><div class="skill-progress-fill" style="width:' + skill.level + '%"></div></div>' +
      '<span class="skill-progress-label" data-level="' + skill.level + '">' + TRANSLATIONS[currentLang].skillLevelLabel + " — " + skill.level + "%</span>" +
      buildChartSVG(skill.trend);
    return el;
  }

  var track = document.getElementById("skill-track");
  var marqueeWrap = document.getElementById("skill-marquee-wrap");
  var iconRowFrontend = document.getElementById("skill-icon-row-frontend");
  var iconRowBackend = document.getElementById("skill-icon-row-backend");
  var REPEATS = 3;
  var allCards = [];

  for (var r = 0; r < REPEATS; r++) {
    SKILLS.forEach(function (skill) {
      var el = buildSkillCard(skill);
      track.appendChild(el);
      allCards.push({ el: el, key: skill.key });
    });
  }

  function wireIconPress(btn) {
    function press() { btn.classList.add("is-pressed"); }
    function release() { btn.classList.remove("is-pressed"); }
    btn.addEventListener("mousedown", press);
    btn.addEventListener("mouseup", release);
    btn.addEventListener("mouseleave", release);
    btn.addEventListener("touchstart", press, { passive: true });
    btn.addEventListener("touchend", release);
    btn.addEventListener("touchcancel", release);
  }

  SKILLS.forEach(function (skill) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-icon";
    btn.dataset.skill = skill.key;
    btn.innerHTML = '<span class="skill-icon-logo" style="background:' + skill.badge.bg + ";color:" + skill.badge.fg + '">' + skill.badge.label + "</span><span>" + skill.name + "</span>";
    (skill.category === "frontend" ? iconRowFrontend : iconRowBackend).appendChild(btn);
    wireIconPress(btn);
    btn.addEventListener("click", function () { toggleSkill(skill.key); });
  });

  var setWidth = 0;
  function measureSetWidth() {
    if (allCards.length > SKILLS.length) setWidth = allCards[SKILLS.length].el.offsetLeft - allCards[0].el.offsetLeft;
  }
  measureSetWidth();
  window.addEventListener("resize", measureSetWidth);

  var pos2 = 0, playing = !reduced, activeSkill = null, lastTs = null, SPEED = 34;
  function applyTransform() { track.style.transform = "translateX(" + pos2.toFixed(1) + "px)"; }
  function wrapPos() {
    if (!setWidth) return;
    var lower = -3 * setWidth, upper = -2 * setWidth;
    while (pos2 < lower) pos2 += setWidth;
    while (pos2 > upper) pos2 -= setWidth;
  }
  function tick(ts) {
    if (lastTs === null) lastTs = ts;
    var dt = (ts - lastTs) / 1000;
    lastTs = ts;
    if (playing && setWidth) { pos2 -= SPEED * dt; wrapPos(); applyTransform(); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function setActiveSkill(key) {
    document.querySelectorAll(".skill-icon").forEach(function (b) { b.classList.toggle("is-active", b.dataset.skill === key); });
    allCards.forEach(function (c) { c.el.classList.toggle("is-highlighted", c.key === key); });
  }
  function centerOnSkill(key) {
    if (!setWidth) measureSetWidth();
    var wrapWidth = marqueeWrap.getBoundingClientRect().width;
    var viewportCenter = wrapWidth / 2;
    var best = null, bestDelta = Infinity;
    allCards.forEach(function (c) {
      if (c.key !== key) return;
      var cardCenter = c.el.offsetLeft + c.el.offsetWidth / 2;
      var target = viewportCenter - cardCenter;
      var delta = Math.abs(target - pos2);
      if (delta < bestDelta) { bestDelta = delta; best = target; }
    });
    if (best === null) return;
    track.classList.add("is-centering");
    pos2 = best;
    applyTransform();
    window.setTimeout(function () { track.classList.remove("is-centering"); }, 650);
  }
  function toggleSkill(key) {
    if (activeSkill === key) { activeSkill = null; playing = !reduced; setActiveSkill(null); }
    else { activeSkill = key; playing = false; centerOnSkill(key); setActiveSkill(key); }
  }
  allCards.forEach(function (c) { c.el.addEventListener("click", function () { toggleSkill(c.key); }); });
  marqueeWrap.addEventListener("mouseenter", function () { if (!activeSkill) playing = false; });
  marqueeWrap.addEventListener("mouseleave", function () { if (!activeSkill) playing = !reduced; });

  /* ==========================================================================
     11. RENDER PROJECT, BAHASA, SERTIFIKAT, BIDANG, IKON KONTAK HERO
     ========================================================================== */
  function renderProjects(projects, linkLabel) {
    var grid = document.getElementById("project-grid");
    if (!grid) return;
    grid.innerHTML = "";
    projects.forEach(function (p) {
      var el = document.createElement("div");
      el.className = "project-card reveal-up";
      el.innerHTML = "<h3>" + p.title + "</h3><p>" + p.desc + "</p>" +
        '<a href="' + p.link + '" target="_blank" rel="noopener">' + linkLabel + "</a>";
      grid.appendChild(el);
      observeReveal(el);
    });
  }
  function renderCerts(emptyText) {
    var list = document.getElementById("certList");
    if (!list) return;
    list.innerHTML = "";
    if (!CERTS.length) { list.innerHTML = '<div class="empty-state">' + emptyText + "</div>"; return; }
    CERTS.forEach(function (c) {
      var el = document.createElement("div");
      el.className = "cert-item reveal-up";
      el.innerHTML = '<span class="cert-icon">' + c.icon + '</span><span><span class="cert-name">' + c.name + '</span><br/><span class="cert-issuer">' + c.issuer + "</span></span>";
      list.appendChild(el);
      observeReveal(el);
    });
  }
  function renderFields(emptyText) {
    var row = document.getElementById("fieldChipRow");
    if (!row) return;
    row.innerHTML = "";
    if (!FIELDS.length) { row.innerHTML = '<div class="empty-state">' + emptyText + "</div>"; return; }
    FIELDS.forEach(function (f) {
      var el = document.createElement("span");
      el.className = "field-chip reveal-up";
      el.textContent = f;
      row.appendChild(el);
      observeReveal(el);
    });
  }

  var heroContactIcons = document.getElementById("heroContactIcons");
  CONTACTS.forEach(function (c) {
    var a = document.createElement("a");
    a.className = "hero-contact-icon";
    a.href = c.href; a.target = "_blank"; a.rel = "noopener";
    a.textContent = c.icon;
    a.title = c.label;
    a.setAttribute("aria-label", c.label);
    heroContactIcons.appendChild(a);
  });

  var langGrid = document.getElementById("langSkillGrid");
  LANGUAGES.forEach(function (l) {
    var el = document.createElement("div");
    el.className = "lang-skill-card reveal-up";
    var levelText = l.levelLabel ? l.levelLabel : l.levelPercent + "%";
    el.innerHTML =
      '<div class="lang-skill-top"><span class="lang-skill-flag">' + l.flag + '</span><span class="lang-skill-name">' + l.name + "</span></div>" +
      '<div class="skill-progress-track"><div class="skill-progress-fill" style="width:' + l.levelPercent + '%"></div></div>' +
      '<span class="lang-skill-level">' + levelText + "</span>";
    langGrid.appendChild(el);
    observeReveal(el);
  });

  /* ==========================================================================
     12. REVEAL ON SCROLL
     ========================================================================== */
  var revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 })
    : null;
  function observeReveal(el) {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("is-visible");
  }
  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right").forEach(observeReveal);

  initLanguage();
})();
