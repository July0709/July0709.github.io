/* ============================================================
   Bookshelf Hero Animation — 宝可梦 · 收服皮卡丘
   遭遇 → 抛球 → 吸入 → 摇晃三下 → 收服成功（循环）
   ============================================================ */
(function () {
    'use strict';

    var stage = document.getElementById('anim-stage');
    if (!stage) return;

    var pika      = stage.querySelector('.poke-pikachu');
    var pikaPx    = stage.querySelector('.poke-pikachu-px');
    var track     = stage.querySelector('.poke-ball-track');
    var dialogTxt = document.getElementById('poke-dialog-text');

    /* ── 像素皮卡丘（box-shadow 画法） ── */
    var PX = 6;
    var COLORS = { K: '#2b2b2b', Y: '#ffd733', R: '#e8483f', W: '#ffffff' };
    var MAP = [
        '..KK......KK....',
        '..KYK....KYK....',
        '..KYYK..KYYK....',
        '..KYYKKKKYYK....',
        '.KYYYYYYYYYYYK..',
        'KYYKYYYYYYKYYYK.',
        'KYYKYKYYKYKYYYK.',
        'KYYYYYYKKYYYYYYK',
        'KRYYYYKYYKYYYYRK',
        'KRRYYYYYYYYYYRRK',
        '.KRRYYYYYYYYRRK.',
        '..KRYYYYYYYYRK..',
        '..KYYYYYYYYYYK..',
        '..KKKK....KKKK..'
    ];
    (function buildPikachu() {
        if (!pikaPx) return;
        var shadows = [];
        for (var y = 0; y < MAP.length; y++) {
            var row = MAP[y];
            for (var x = 0; x < row.length; x++) {
                var c = COLORS[row.charAt(x)];
                if (c) shadows.push((x * PX) + 'px ' + (y * PX) + 'px 0 0 ' + c);
            }
        }
        pikaPx.style.boxShadow = shadows.join(',');
        pika.style.width  = (MAP[0].length * PX) + 'px';
        pika.style.height = (MAP.length * PX) + 'px';
    })();

    /* ── 对话文案 ── */
    var MSG = {
        encounter: { zh: '野生的皮卡丘出现了！',       en: 'A wild Pikachu appeared!' },
        shake:     { zh: '… … …',                      en: '... ... ...' },
        caught:    { zh: '收服成功！皮卡丘成为了伙伴！', en: 'Gotcha! Pikachu was caught!' }
    };
    function curLang() {
        return localStorage.getItem('language') === 'en' ? 'en' : 'zh';
    }

    var timers = [];
    var running = false;
    var currentMsg = 'encounter';
    var typeTimer = null;

    var reduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() {
        timers.forEach(clearTimeout);
        timers = [];
        if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
    }
    function setPhase(p) { stage.setAttribute('data-phase', p); }

    /* 打字机输出对话框文字 */
    function typeMsg(key) {
        currentMsg = key;
        if (!dialogTxt) return;
        var text = MSG[key][curLang()];
        if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
        if (reduced) { dialogTxt.textContent = text; return; }
        dialogTxt.textContent = '';
        var i = 0;
        typeTimer = setInterval(function () {
            i++;
            dialogTxt.textContent = text.slice(0, i);
            if (i >= text.length) { clearInterval(typeTimer); typeTimer = null; }
        }, 50);
    }

    /* 计算精灵球落点（皮卡丘脚下） */
    function throwTarget() {
        var sr = stage.getBoundingClientRect();
        var pr = pika.getBoundingClientRect();
        return pr.left - sr.left + pr.width / 2 - track.offsetWidth / 2;
    }

    function resetCast() {
        clearAll();
        track.style.left = '';          // 球回到训练家一侧
        setPhase('encounter');
    }

    function runCycle() {
        if (running) return;
        running = true;
        resetCast();
        typeMsg('encounter');

        later(function () {                              // 抛出精灵球
            track.style.left = throwTarget() + 'px';
            setPhase('throw');
        }, 2400);

        later(function () { setPhase('absorb'); }, 3450); // 皮卡丘被吸入

        later(function () {                              // 摇晃三下
            setPhase('shake');
            typeMsg('shake');
        }, 4000);

        later(function () {                              // 收服成功
            setPhase('caught');
            typeMsg('caught');
        }, 6200);

        later(function () {                              // 复位，进入下一轮
            running = false;
            later(runCycle, 1500);
        }, 9600);
    }

    /* 重播按钮 */
    var replayBtn = stage.querySelector('.anim-replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', function () {
            running = false;
            resetCast();
            later(runCycle, 400);
        });
    }

    /* 语言切换时重打当前对话 */
    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            setTimeout(function () { typeMsg(currentMsg); }, 60);
        });
    }

    if (reduced) {
        /* 减少动态：定格在遭遇画面 */
        setPhase('encounter');
        typeMsg('encounter');
        if (replayBtn) replayBtn.style.display = 'none';
        return;
    }

    /* 页面加载（含 loading 屏淡出）后启动 */
    function kickoff() { later(runCycle, 700); }
    if (document.readyState === 'complete') kickoff();
    else window.addEventListener('load', kickoff);
})();
