/* ============================================================
   Bookshelf Hero Animation — 时间线编排
   抱猫互动 → 放下小猫 → 走向书柜 → 走进魔法书
   ============================================================ */
(function () {
    'use strict';

    var stage = document.getElementById('anim-stage');
    if (!stage) return;

    var girl  = stage.querySelector('.anim-girl');
    var cat   = stage.querySelector('.anim-cat');
    var magic = stage.querySelector('.anim-magic-book');

    var timers = [];
    var running = false;

    var reduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function later(fn, ms) {
        timers.push(setTimeout(fn, ms));
    }
    function clearAll() {
        timers.forEach(clearTimeout);
        timers = [];
    }
    function setPhase(p) {
        stage.setAttribute('data-phase', p);
    }

    /* 计算女孩走向书柜的落点与进书位移 */
    function targets() {
        var sr = stage.getBoundingClientRect();
        var br = magic.getBoundingClientRect();
        var gr = girl.getBoundingClientRect();
        var bookCX = br.left - sr.left + br.width / 2;
        var bookCY = br.top  - sr.top  + br.height / 2;
        return {
            walkLeft: bookCX - gr.width * 1.5,           // 停在书柜左缘附近
            enterDX:  bookCX - (gr.left - sr.left + gr.width / 2),
            enterDY:  bookCY - (gr.top  - sr.top  + gr.height / 2)
        };
    }

    function resetCast(instant) {
        clearAll();
        if (instant) stage.classList.add('anim-no-anim');
        girl.style.left = '';
        girl.style.transform = '';
        cat.style.left = '';
        setPhase('cuddle');
        if (instant) {
            girl.style.opacity = '0';
            cat.style.opacity = '0';
            void stage.offsetWidth;                       // 强制回流
            stage.classList.remove('anim-no-anim');
            requestAnimationFrame(function () {
                girl.style.opacity = '';
                cat.style.opacity = '';
            });
        }
    }

    function runCycle() {
        if (running) return;
        running = true;
        setPhase('cuddle');

        later(function () { setPhase('release'); }, 2600);        // 放下小猫

        later(function () {                                     // 走向书柜
            setPhase('walk');
            var t = targets();
            girl.style.left = Math.max(t.walkLeft, 0) + 'px';
        }, 3900);

        later(function () {                                     // 走进魔法书
            setPhase('enter');
            var t = targets();
            var gr = girl.getBoundingClientRect();
            var sr = stage.getBoundingClientRect();
            var girlCX = gr.left - sr.left + gr.width / 2;
            var girlCY = gr.top  - sr.top  + gr.height / 2;
            var br = magic.getBoundingClientRect();
            var dx = (br.left - sr.left + br.width / 2) - girlCX;
            var dy = (br.top  - sr.top  + br.height / 2) - girlCY;
            girl.style.transform =
                'translate(' + dx + 'px,' + dy + 'px) scale(0.3)';
            girl.style.opacity = '0';
        }, 7100);

        later(function () { setPhase('inside'); }, 7900);       // 魔法书发光

        later(function () {                                     // 复位，进入下一轮
            resetCast(true);
            running = false;
            later(runCycle, 1200);
        }, 10400);
    }

    /* 重播按钮 */
    var replayBtn = stage.querySelector('.anim-replay');
    if (replayBtn) {
        replayBtn.addEventListener('click', function () {
            running = false;
            resetCast(true);
            later(runCycle, 500);
        });
    }

    if (reduced) {
        /* 减少动态：定格在抱猫画面 */
        setPhase('cuddle');
        if (replayBtn) replayBtn.style.display = 'none';
        return;
    }

    /* 页面加载（含 loading 屏淡出）后启动 */
    function kickoff() { later(runCycle, 700); }
    if (document.readyState === 'complete') kickoff();
    else window.addEventListener('load', kickoff);
})();
