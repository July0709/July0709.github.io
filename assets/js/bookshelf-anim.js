/* ============================================================
   Bookshelf Hero Animation — AI 帧动画播放控制
   抱猫互动 → 放下小猫 → 走向书柜 → 走进魔法书（循环）
   ============================================================ */
(function () {
    'use strict';

    var stage = document.getElementById('anim-stage');
    if (!stage) return;

    var frames  = stage.querySelectorAll('.anim-frame');
    var caption = document.getElementById('anim-caption');
    var replay  = document.getElementById('anim-replay');

    var CAPTIONS = {
        zh: [
            '抱着小猫，亲密互动 ❤',
            '轻轻放下小猫',
            '转身走向书柜',
            '走进发光的魔法书 ✨'
        ],
        en: [
            'Cuddling the kitten ❤',
            'Gently putting it down',
            'Walking to the bookcase',
            'Stepping into a glowing book ✨'
        ]
    };
    var HOLD = [1900, 1400, 1400, 2300];   // 每帧停留时长（ms）

    var timers = [];
    var idx = 0;

    function curLang() {
        return (localStorage.getItem('language') || 'zh') === 'en' ? 'en' : 'zh';
    }
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() { timers.forEach(clearTimeout); timers = []; }

    function show(n) {
        frames.forEach(function (f, k) { f.classList.toggle('show', k === n); });
        if (caption) caption.textContent = CAPTIONS[curLang()][n];
    }

    function loop() {
        show(idx);
        later(function () {
            idx = (idx + 1) % frames.length;
            loop();
        }, HOLD[idx]);
    }

    /* 重播 */
    if (replay) {
        replay.addEventListener('click', function () {
            clearAll();
            idx = 0;
            loop();
        });
    }

    /* 跟随页面语言切换更新字幕 */
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            later(function () { show(idx); }, 0);
        });
    }

    /* 减少动态效果：定格第一帧 */
    if (window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        show(0);
        if (replay) replay.style.display = 'none';
        return;
    }

    /* 页面加载（含 loading 屏淡出）后启动 */
    function kickoff() { later(loop, 700); }
    if (document.readyState === 'complete') kickoff();
    else window.addEventListener('load', kickoff);
})();
