(function () {
  "use strict";

  /* ============================================================
     Translations
     ============================================================ */
  var translations = {
    en: {
      langButton: '中文',
      /* Nav */
      navHome: 'Home', navAbout: 'About', navServices: 'Services',
      navPortfolio: 'Portfolio', navBlog: 'Blog', navContact: 'Contact',
      /* Hero */
      heroEyebrow: 'Southern Medical University',
      heroTitle: 'Be a Spring Tree, See Those Spring Mountains',
      heroSubtitle: 'July',
      heroBtn: 'Find Out More',
      /* About */
      aboutEyebrow: 'About Me',
      aboutHeading: 'I am a student from Southern Medical University, majored in clinical medicine.',
      aboutText: 'Passionate about combining medical knowledge with technology to make a difference in healthcare.',
      aboutBtn: 'Who I Am',
      /* Research & Skills */
      servicesEyebrow: 'Experience & Skills',
      servicesHeading: 'My Research Journey',
      /* nav label */
      navServices: 'Research',
      /* Timeline */
      tl1Date: '2025.02 — Present',
      tl1Org: 'Department of Plastic Surgery · Microbial Big Data Lab',
      tl1Role: 'Core Member | ML · Deep Learning · Skin Microbiome Peptides',
      tl1b1: 'Literature review on skin microbiome peptides',
      tl1b2: 'UK Biobank (UKB) database structure exploration & research ideation',
      tl1b3: 'R: microbial co-occurrence network analysis & complex statistical modelling',
      tl1b4: 'Python: causal machine learning & deep learning exploration',
      tl1b5: 'Wet lab: mouse behavioural tests, depression model construction & verification, odour collection',
      tl1b6: 'Web development: GitHub Pages and other tools for site deployment',
      tl2Date: '2023.09 — 2025.02',
      tl2Org: 'Southern Organoid Research Group',
      tl2Role: 'Core Member | Organoids · Organ-on-a-Chip · Nasopharyngeal Carcinoma',
      tl2b1: 'Led "Nasal-Brain Pathway" chip design — Provincial 3rd Prize at 10th Basic Medical Innovation Forum',
      tl2b2: 'Led science communication project — Provincial 2nd Prize at 17th Guangdong Science Popularisation Competition',
      tl2b3: 'Core member: visualisation track 1st Prize at SMU MEDofScience Research Competition',
      tl2b4: 'Proficient in basic chemistry, organic chemistry and biochemistry laboratory operations',
      tl1Hover: 'Network Analysis',
      tl2Hover: 'Organoid Research',
      chipReplay: 'Replay Assembly',
      chipBadgeSub: 'Olfactory Pathway Simulation',
      chip2Toggle: 'View Diagram',
      awardsToggle: 'View Awards', awardsClose: 'Hide Awards',
      aw1: "China International College Students' Innovation Competition — Campus 3rd Prize (core member)",
      aw2: 'SMU "Challenge Cup" — Science & Technology Invention 2nd Prize (core member)',
      aw3: '10th Basic Medical Innovation Forum, Interdisciplinary Track — Provincial 3rd Prize (lead)',
      aw4: '1st Guangdong College Chemistry Experiment Competition, New Experiment Design — 2nd Prize (core member)',
      aw5: 'SMU 6th Chemistry Lab Micro-video Competition — 2nd Prize (lead)',
      aw6: '17th Guangdong Science Popularisation Competition — Provincial 2nd Prize (lead)',
      aw7: 'SMU MEDofScience Visualisation Track — 1st Prize (core member)',
      /* Skill tabs */
      tabBio: 'Bioinformatics', tabWet: 'Wet Lab', tabWeb: 'Web Design',
      /* Bio panel */
      bioRDesc: 'Microbial co-occurrence network analysis & complex statistical modelling',
      bioPyDesc: 'Causal machine learning (CausalML) & deep learning exploration',
      bioUkbDesc: 'Database structure deep-dive & research hypothesis development',
      vizCap1: 'Co-occurrence Network Analysis',
      vizCap2: 'Module Network',
      vizCap3: 'Module Composition',
      vizCap4: 'Module Expression Pattern',
      /* Wet lab panel */
      wetlabIntro: 'Hands-on experience in animal behaviour research and biochemical laboratory techniques.',
      wg1Title: 'Animal Model', wg2Title: 'Laboratory Operations',
      wt1: 'Mouse Behavioural Tests', wt2: 'Depression Mouse Modelling',
      wt3: 'Model Verification', wt4: 'Odour Collection',
      wt5: 'Basic Chemistry Experiments', wt6: 'Organic Chemistry Experiments', wt7: 'Biochemistry Experiments',
      /* Web panel */
      webIntro: 'Building clean, responsive websites using modern web technologies and GitHub Pages.',
      wp1Title: 'The SMOOTH Lab', wp1Desc: 'Research group website — design & deployment',
      wp2Title: "July's Portfolio", wp2Desc: 'Personal homepage — this site',
      /* Portfolio */
      portfolioEyebrow: 'Academic Vision',
      portfolioHeading: 'Research Philosophy',
      portfolioSubtitle: 'Driven by curiosity, guided by evidence, and committed to bridging laboratory discoveries with clinical impact.',
      acadQuote: '"Medicine is a science of uncertainty and an art of probability — my research aims to narrow that uncertainty through rigorous, data-driven inquiry."',
      pillar1Title: 'Computational Medicine',
      pillar1Desc: 'Leveraging bioinformatics, causal machine learning, and population-scale biobanks to uncover disease mechanisms hidden in large-scale biological data.',
      pillar2Title: 'Translational Research',
      pillar2Desc: 'Bridging bench discoveries to bedside applications through organoid models, organ-on-a-chip platforms, and in vivo validation studies.',
      pillar3Title: 'Open & Reproducible Science',
      pillar3Desc: 'Committed to transparent methodology, open data practices, and interdisciplinary collaboration as foundations of trustworthy science.',
      interestsEyebrow: 'Research Interests',
      tag1: 'Skin Microbiome', tag2: 'Causal Machine Learning', tag3: 'Organ-on-a-Chip',
      tag4: 'UK Biobank', tag5: 'Nasopharyngeal Carcinoma', tag6: 'Olfactory Pathway',
      tag7: 'Microbiome Peptides', tag8: 'Depression Models',
      /* CTA */
      ctaHeading: "Let's Connect!",
      ctaBtn1: 'Contact Me', ctaBtn2: 'My GitHub',
      /* Contact */
      contactEyebrow: 'Get In Touch',
      contactHeading: 'Contact Me',
      labelName: 'Name *', labelEmail: 'Email *',
      labelSubject: 'Subject *', labelMessage: 'Message *',
      contactSubmit: 'Send Message',
      /* Blog Preview */
      blogNewsEyebrow: 'Latest Posts', blogNewsHeading: 'Blog',
      blogViewAll: 'View All Posts →', blogSource: 'Category',
      /* Footer */
      copyright: 'Copyright © July 2026'
    },
    zh: {
      langButton: 'EN',
      navHome: '首页', navAbout: '关于', navServices: '技能',
      navPortfolio: '作品集', navBlog: '博客', navContact: '联系',
      heroEyebrow: '南方医科大学',
      heroTitle: '去做春树，见那春山',
      heroSubtitle: 'July',
      heroBtn: '了解更多',
      aboutEyebrow: '关于我',
      aboutHeading: '我是南方医科大学临床医学专业的学生。',
      aboutText: '热衷于将医学知识与技术相结合，为医疗保健领域做出贡献。',
      aboutBtn: '关于我',
      /* 科研与技能 */
      servicesEyebrow: '科研经历与技能',
      servicesHeading: '我的研究历程',
      navServices: '科研',
      /* 时间线 */
      tl1Date: '2025.02 — 至今',
      tl1Org: '整形外科·微生物大数据课题组',
      tl1Role: '核心成员 | 机器学习 · 深度学习 · 皮肤微生物肽',
      tl1b1: '皮肤微生物肽文献综述撰写',
      tl1b2: 'UK Biobank（UKB）数据库数据结构深度探索与研究思路积累',
      tl1b3: 'R 语言：微生物共现网络分析与复杂统计建模',
      tl1b4: 'Python：因果机器学习（CausalML）及深度学习探索',
      tl1b5: '湿实验：小鼠行为学、抑郁鼠造模及验证、气味收集',
      tl1b6: '网页搭建：熟练使用 GitHub Pages 等工具进行网站部署',
      tl2Date: '2023.09 — 2025.02',
      tl2Org: '南方类器官课题组',
      tl2Role: '核心成员 | 类器官 · 器官芯片 · 鼻咽癌',
      tl2b1: '以负责人身份设计"鼻脑通路"芯片，荣获第十届基础医学创新研究论坛省级三等奖',
      tl2b2: '以负责人身份参加第十七届广东省科普作品创作大赛，荣获省级二等奖',
      tl2b3: '主要成员：南方医科大学 MEDofScience 科研大赛可视化赛道一等奖',
      tl2b4: '熟练掌握基础化学、有机化学及生物化学实验操作',
      tl1Hover: '微生物网络分析',
      tl2Hover: '类器官研究',
      chipReplay: '重演组装',
      chipBadgeSub: '模仿嗅神经直达通路',
      chip2Toggle: '查看结构图',
      awardsToggle: '查看奖项', awardsClose: '收起奖项',
      aw1: '中国国际大学生创新大赛校赛三等奖（主要成员）',
      aw2: '南方医科大学"挑战杯"科技发明制作类二等奖（主要成员）',
      aw3: '第十届基础医学创新研究暨实验设计论坛交叉学科赛道省级三等奖（负责人）',
      aw4: '第一届广东省大学生化学实验竞赛化学新实验设计二等奖（主要成员）',
      aw5: '南方医科大学第六届化学实验操作微视频竞赛二等奖（负责人）',
      aw6: '第十七届广东省科普作品创作大赛省级二等奖（负责人）',
      aw7: '南方医科大学 MEDofScience 科研大赛可视化赛道一等奖（主要成员）',
      /* 技能标签 */
      tabBio: '生信技能', tabWet: '湿实验技能', tabWeb: '网站制作技能',
      /* 生信面板 */
      bioRDesc: '微生物共现网络分析 & 复杂统计建模',
      bioPyDesc: '因果机器学习（CausalML）& 深度学习探索',
      bioUkbDesc: '数据库结构深度探索与研究假设构建',
      vizCap1: '共现网络分析',
      vizCap2: '模块网络图',
      vizCap3: '模块组成分析',
      vizCap4: '模块表达模式',
      /* 湿实验面板 */
      wetlabIntro: '具备动物行为学研究与生化实验室操作的实践经验。',
      wg1Title: '动物模型', wg2Title: '实验室操作',
      wt1: '小鼠行为学', wt2: '抑郁鼠造模',
      wt3: '模型验证', wt4: '气味收集',
      wt5: '基础化学实验', wt6: '有机化学实验', wt7: '生物化学实验',
      /* 网站制作面板 */
      webIntro: '擅长使用 HTML/CSS/Bootstrap 与 GitHub Pages 搭建简洁、响应式网站。',
      wp1Title: 'The SMOOTH Lab', wp1Desc: '课题组官网 — 设计与部署',
      wp2Title: 'July 的主页', wp2Desc: '本站 — 个人主页',
      portfolioEyebrow: '学术愿景',
      portfolioHeading: '研究理念',
      portfolioSubtitle: '以好奇心为驱动，以证据为引导，致力于将实验室发现转化为临床影响。',
      acadQuote: '"医学是不确定性的科学，也是概率的艺术——我的研究目标是通过严谨的数据驱动探索，缩小这种不确定性。"',
      pillar1Title: '计算医学',
      pillar1Desc: '运用生物信息学、因果机器学习及大规模生物样本库，挖掘藏于海量生物数据中的疾病机制。',
      pillar2Title: '转化医学研究',
      pillar2Desc: '借助类器官模型、器官芯片平台及体内验证实验，将实验室发现转化为临床应用。',
      pillar3Title: '开放与可重复科学',
      pillar3Desc: '坚持透明的研究方法、开放数据实践与跨学科合作，以此为值得信赖的科学奠定基础。',
      interestsEyebrow: '研究兴趣',
      tag1: '皮肤微生物组', tag2: '因果机器学习', tag3: '器官芯片',
      tag4: 'UK Biobank', tag5: '鼻咽癌', tag6: '嗅觉通路',
      tag7: '微生物肽', tag8: '抑郁症模型',
      ctaHeading: '让我们联系吧！',
      ctaBtn1: '联系我', ctaBtn2: '我的 GitHub',
      contactEyebrow: '保持联系',
      contactHeading: '联系我',
      labelName: '姓名 *', labelEmail: '邮箱 *',
      labelSubject: '主题 *', labelMessage: '留言 *',
      contactSubmit: '发送消息',
      /* 博客预览 */
      blogNewsEyebrow: '最新文章', blogNewsHeading: '博客',
      blogViewAll: '查看完整博客 →', blogSource: '分类',
      copyright: '版权所有 © July 2026'
    }
  };

  /* ============================================================
     Language
     ============================================================ */
  var langToggle = document.getElementById('lang-toggle');
  var currentLang = localStorage.getItem('language') || 'en';

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      localStorage.setItem('language', currentLang);
      applyLanguage(currentLang);
    });
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  function setPlaceholder(id, text) {
    var el = document.getElementById(id);
    if (el) el.placeholder = text;
  }

  function applyLanguage(lang) {
    var t = translations[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    /* Language button */
    if (langToggle) langToggle.querySelector('.lang-text').textContent = t.langButton;

    /* Nav links */
    var navLinks = document.querySelectorAll('#nav-menu a');
    var keys = ['navHome', 'navAbout', 'navServices', 'navPortfolio', 'navBlog', 'navContact'];
    navLinks.forEach(function (a, i) { if (keys[i]) a.textContent = t[keys[i]]; });

    /* Hero */
    setText('hero-eyebrow', t.heroEyebrow);
    setText('hero-title', t.heroTitle);
    setText('hero-subtitle', t.heroSubtitle);
    setText('hero-btn', t.heroBtn);

    /* About */
    setText('about-eyebrow', t.aboutEyebrow);
    setText('about-heading', t.aboutHeading);
    setText('about-text', t.aboutText);
    setText('about-btn', t.aboutBtn);

    /* Research & Skills */
    setText('services-eyebrow', t.servicesEyebrow);
    setText('services-heading', t.servicesHeading);
    /* Timeline */
    setText('tl1-hover', t.tl1Hover); setText('tl2-hover', t.tl2Hover);
    setText('chip-replay-label', t.chipReplay); setText('chip-badge-sub', t.chipBadgeSub);
    setText('chip2-toggle-label', t.chip2Toggle);
    setText('tl1-date', t.tl1Date); setText('tl1-org', t.tl1Org); setText('tl1-role', t.tl1Role);
    setText('tl1-b1', t.tl1b1); setText('tl1-b2', t.tl1b2); setText('tl1-b3', t.tl1b3);
    setText('tl1-b4', t.tl1b4); setText('tl1-b5', t.tl1b5); setText('tl1-b6', t.tl1b6);
    setText('tl2-date', t.tl2Date); setText('tl2-org', t.tl2Org); setText('tl2-role', t.tl2Role);
    setText('tl2-b1', t.tl2b1); setText('tl2-b2', t.tl2b2); setText('tl2-b3', t.tl2b3); setText('tl2-b4', t.tl2b4);
    setText('tl2-toggle-label', t.awardsToggle);
    setText('aw1', t.aw1); setText('aw2', t.aw2); setText('aw3', t.aw3); setText('aw4', t.aw4);
    setText('aw5', t.aw5); setText('aw6', t.aw6); setText('aw7', t.aw7);
    /* Skill tabs */
    setText('tab-bio-label', t.tabBio); setText('tab-wet-label', t.tabWet); setText('tab-web-label', t.tabWeb);
    /* Bio panel */
    setText('bio-r-desc', t.bioRDesc); setText('bio-py-desc', t.bioPyDesc); setText('bio-ukb-desc', t.bioUkbDesc);
    setText('viz-cap1', t.vizCap1); setText('viz-cap2', t.vizCap2);
    setText('viz-cap3', t.vizCap3); setText('viz-cap4', t.vizCap4);
    /* Wet lab panel */
    setText('wetlab-intro', t.wetlabIntro);
    setText('wg1-title', t.wg1Title); setText('wg2-title', t.wg2Title);
    setText('wt1', t.wt1); setText('wt2', t.wt2); setText('wt3', t.wt3); setText('wt4', t.wt4);
    setText('wt5', t.wt5); setText('wt6', t.wt6); setText('wt7', t.wt7);
    /* Web panel */
    setText('web-intro', t.webIntro);
    setText('wp1-title', t.wp1Title); setText('wp1-desc', t.wp1Desc);
    setText('wp2-title', t.wp2Title); setText('wp2-desc', t.wp2Desc);
    /* Awards toggle label when open */
    var toggle = document.getElementById('tl2-toggle');
    if (toggle) {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setText('tl2-toggle-label', isOpen ? t.awardsClose : t.awardsToggle);
    }

    /* Portfolio — Academic Vision */
    setText('portfolio-eyebrow',  t.portfolioEyebrow);
    setText('portfolio-heading',  t.portfolioHeading);
    setText('portfolio-subtitle', t.portfolioSubtitle);
    setText('acad-quote-text',    t.acadQuote);
    setText('pillar1-title', t.pillar1Title); setText('pillar1-desc', t.pillar1Desc);
    setText('pillar2-title', t.pillar2Title); setText('pillar2-desc', t.pillar2Desc);
    setText('pillar3-title', t.pillar3Title); setText('pillar3-desc', t.pillar3Desc);
    setText('interests-eyebrow',  t.interestsEyebrow);
    setText('tag1', t.tag1); setText('tag2', t.tag2); setText('tag3', t.tag3);
    setText('tag4', t.tag4); setText('tag5', t.tag5); setText('tag6', t.tag6);
    setText('tag7', t.tag7); setText('tag8', t.tag8);

    /* CTA */
    setText('cta-heading', t.ctaHeading);
    setText('cta-btn1', t.ctaBtn1);
    setText('cta-btn2', t.ctaBtn2);

    /* Contact */
    setText('contact-eyebrow', t.contactEyebrow);
    setText('contact-heading', t.contactHeading);
    setText('label-name', t.labelName);
    setText('label-email', t.labelEmail);
    setText('label-subject', t.labelSubject);
    setText('label-message', t.labelMessage);
    setText('contact-submit', t.contactSubmit);

    /* Footer */
    setText('footer-copy', t.copyright);

    /* Blog News Preview */
    setText('blog-news-eyebrow', t.blogNewsEyebrow);
    setText('blog-news-heading', t.blogNewsHeading);
    setText('blog-view-all', t.blogViewAll);
    /* Re-render blog preview list in current language */
    if (typeof getBlogPosts !== 'undefined') renderBlogNewsPreview(lang);
  }

  /* ============================================================
     Theme
     ============================================================ */
  var themeToggle = document.getElementById('theme-toggle');
  var htmlEl = document.documentElement;

  var savedTheme = localStorage.getItem('theme') || 'light';
  htmlEl.setAttribute('data-bs-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = htmlEl.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    var icon = themeToggle.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }

  /* ============================================================
     Mobile Navigation
     ============================================================ */
  var mobileToggle = document.getElementById('mobile-menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close on nav link click */
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     Scroll Progress Bar
     ============================================================ */
  var scrollProgress = document.getElementById('scroll-progress');
  function updateScrollProgress() {
    if (!scrollProgress) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = Math.min(pct, 100) + '%';
  }

  /* ============================================================
     Scroll-to-top
     ============================================================ */
  var scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop || scrollProgress) {
    window.addEventListener('scroll', function () {
      if (scrollToTop) {
        scrollToTop.style.display = window.pageYOffset > 200 ? 'flex' : 'none';
      }
      updateScrollProgress();
    }, { passive: true });
  }

  /* ============================================================
     Fade-in on scroll
     ============================================================ */
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ============================================================
     Loading screen
     ============================================================ */
  window.addEventListener('load', function () {
    var ls = document.querySelector('.loading-screen');
    if (ls) setTimeout(function () { ls.classList.add('hidden'); }, 400);
  });

  /* ============================================================
     Contact form
     ============================================================ */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var formStatus = document.getElementById('formStatus');

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        formStatus.innerHTML = '<div class="alert alert-danger mt-2">Please fill in all required fields.</div>';
        return;
      }

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var original = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        formStatus.innerHTML = '<div class="alert alert-success mt-2">Thank you! I\'ll get back to you soon.</div>';
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }, 1500);
    });
  }

  /* ============================================================
     Bookshelf — Homepage shelf preview
     ============================================================ */
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  /* ── Blog News Preview (homepage) ── */
  function renderBlogNewsPreview(lang) {
    var list  = document.getElementById('blog-news-list');
    var imgEl = document.getElementById('blog-news-img');
    if (!list) return;

    var posts = getBlogPosts(4);
    if (!posts || !posts.length) return;

    var sourceLabel = translations[lang].blogSource;
    var activeIndex = 0;

    function setActive(index) {
      activeIndex = index;
      list.querySelectorAll('.blog-news-item').forEach(function (el, i) {
        el.classList.toggle('active', i === index);
      });
      if (imgEl && posts[index]) {
        imgEl.style.opacity = '0';
        setTimeout(function () {
          imgEl.src = posts[index].image;
          imgEl.alt = lang === 'zh' ? posts[index].title : (posts[index].titleEn || posts[index].title);
          imgEl.style.opacity = '1';
        }, 150);
      }
    }

    list.innerHTML = posts.map(function (p, i) {
      var title = lang === 'zh' ? p.title : (p.titleEn || p.title);
      return '<a class="blog-news-item' + (i === 0 ? ' active' : '') +
        '" href="blog-post.html?id=' + p.id + '" role="listitem">' +
        '<div class="blog-news-item-title">' + title + '</div>' +
        '<div class="blog-news-item-source">' + sourceLabel + '：' + p.category + '</div>' +
        '</a>';
    }).join('');

    /* Set initial image */
    if (imgEl && posts[0]) {
      imgEl.src = posts[0].image;
      imgEl.alt = lang === 'zh' ? posts[0].title : (posts[0].titleEn || posts[0].title);
    }

    /* Hover: update active state & image (without navigating) */
    list.querySelectorAll('.blog-news-item').forEach(function (el, i) {
      el.addEventListener('mouseenter', function () { setActive(i); });
    });
  }

  if (typeof getBlogPosts !== 'undefined') {
    renderBlogNewsPreview(currentLang);
  }

  /* ============================================================
     Timeline scroll animation
     ============================================================ */
  var tlObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('tl-visible');
        tlObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.timeline-item').forEach(function (el) {
    tlObserver.observe(el);
  });

  /* Awards toggle */
  var awardsToggle = document.getElementById('tl2-toggle');
  var awardsList   = document.getElementById('tl2-awards');
  if (awardsToggle && awardsList) {
    awardsToggle.addEventListener('click', function () {
      var open = awardsToggle.getAttribute('aria-expanded') === 'true';
      awardsToggle.setAttribute('aria-expanded', String(!open));
      awardsList.setAttribute('aria-hidden', String(open));
      awardsList.classList.toggle('open', !open);
      var t = translations[currentLang];
      setText('tl2-toggle-label', open ? t.awardsToggle : t.awardsClose);
    });
  }

  /* ============================================================
     Skills tabs
     ============================================================ */
  var tabBtns = document.querySelectorAll('.skill-tab-btn');
  var panels  = document.querySelectorAll('.skill-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var target = document.getElementById(btn.getAttribute('aria-controls'));
      if (target) target.classList.add('active');
    });
  });

  /* ============================================================
     Bioinformatics image carousel
     ============================================================ */
  (function () {
    var track    = document.getElementById('viz-track');
    var dotsWrap = document.getElementById('viz-dots');
    var prevBtn  = document.getElementById('viz-prev');
    var nextBtn  = document.getElementById('viz-next');
    if (!track) return;

    var slides    = track.querySelectorAll('.viz-carousel-slide');
    var total     = slides.length;
    var current   = 0;
    var autoTimer = null;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'viz-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      dotsWrap.querySelectorAll('.viz-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() { autoTimer = setInterval(function () { goTo(current + 1); }, 3500); }
    function stopAuto()  { clearInterval(autoTimer); }

    if (prevBtn) prevBtn.addEventListener('click', function () { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { stopAuto(); goTo(current + 1); startAuto(); });

    var carousel = track.closest('.viz-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAuto);
      carousel.addEventListener('mouseleave', startAuto);
    }

    startAuto();
  })();

  /* ============================================================
     Mobile: pause hero video to save bandwidth
     ============================================================ */
  var heroVideo = document.getElementById('hero-video');
  if (heroVideo && window.innerWidth <= 768) { heroVideo.pause(); }

  /* ============================================================
     Timeline circle: mouse-tracking magnifier (node 1)
     ============================================================ */
  document.querySelectorAll('.timeline-circle[data-magnify]').forEach(function (circle) {
    var img = circle.querySelector('.circle-img');
    if (!img) return;
    circle.addEventListener('mousemove', function (e) {
      var rect = circle.getBoundingClientRect();
      var cx = (e.clientX - rect.left) / rect.width;
      var cy = (e.clientY - rect.top)  / rect.height;
      var tx = (0.5 - cx) * 33;
      var ty = (0.5 - cy) * 33;
      img.style.transition = 'transform 0.08s linear';
      img.style.transform  = 'scale(1.5) translate(' + tx + '%, ' + ty + '%)';
    });
    circle.addEventListener('mouseleave', function () {
      img.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
      img.style.transform  = 'scale(1.5) translate(0%, 0%)';
    });
  });

  /* ============================================================
     Chip assembly animation (node 2)
     ============================================================ */
  (function () {
    var viewer    = document.getElementById('chip-viewer-1');
    var replayBtn = document.getElementById('chip-replay');
    if (!viewer) return;

    function playChip() {
      viewer.classList.remove('chip-animate');
      void viewer.offsetWidth; /* reflow to restart CSS animations */
      viewer.classList.add('chip-animate');
    }

    var chipObs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        playChip();
        chipObs.unobserve(viewer);
      }
    }, { threshold: 0.3 });
    chipObs.observe(viewer);

    if (replayBtn) replayBtn.addEventListener('click', playChip);
  })();

})();


/* ============================================================
   Chip2 interactive hotspot viewer (Plan B)
   ============================================================ */
(function () {
  var toggleBtn = document.getElementById('chip2-toggle');
  var wrap      = document.getElementById('chip2-wrap');
  var svgEl     = document.getElementById('chip2-svg');
  var tooltip   = document.getElementById('chip2-tooltip');
  if (!toggleBtn || !wrap || !svgEl || !tooltip) return;

  /* Toggle expand / collapse */
  toggleBtn.addEventListener('click', function () {
    var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    if (expanded) { wrap.setAttribute('hidden', ''); }
    else          { wrap.removeAttribute('hidden'); }
  });

  /* Hotspot hover — tooltip follows mouse */
  var zones   = svgEl.querySelectorAll('.chip2-zone');
  var viewer  = document.getElementById('chip2-viewer');
  var tipName = tooltip.querySelector('.chip2-tip-name');
  var tipDesc = tooltip.querySelector('.chip2-tip-desc');

  function getLang() {
    return (document.documentElement.lang || 'zh') === 'en' ? 'en' : 'zh';
  }

  zones.forEach(function (zone) {
    zone.addEventListener('mouseenter', function () {
      var lang = getLang();
      tipName.textContent = lang === 'en' ? zone.dataset.nameEn : zone.dataset.nameZh;
      tipDesc.textContent = lang === 'en' ? zone.dataset.descEn : zone.dataset.descZh;
      tooltip.classList.add('visible');
      svgEl.classList.add('has-hover');
    });
    zone.addEventListener('mousemove', function (e) {
      var rect = viewer.getBoundingClientRect();
      var x = e.clientX - rect.left + 14;
      var y = e.clientY - rect.top  - 60;
      x = Math.min(x, rect.width  - 210);
      y = Math.max(y, 6);
      tooltip.style.left = x + 'px';
      tooltip.style.top  = y + 'px';
    });
    zone.addEventListener('mouseleave', function () {
      tooltip.classList.remove('visible');
      svgEl.classList.remove('has-hover');
    });
  });
})();

