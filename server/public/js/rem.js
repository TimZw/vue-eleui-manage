/**
 *Created by TIM on 2018/4/4.
 */
(function (win, doc) {
    change();

    function change() {
        // doc.documentElement.style.fontSize = doc.documentElement.clientWidth * 10 / 375 + 'px';
        document.documentElement.style.fontSize = 100*document.clientWidth/750 + 'px';
    }

    win.addEventListener('resize', change, false);
    win.addEventListener('orientationchange', change, false);
    /* 这个是移动端设备横屏、竖屏转换时触发的事件处理函数 */
})(window, document);