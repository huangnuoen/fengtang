const $ = require("../lib/jquery-3.2.1.min.js");
const fastclick = require("../lib/fastclick.js");
const TweenMax = require("../lib/TweenMax.min.js");



//const guide = $('#guide');
// page1 Ani
const logo = $('#guide .page1 .logo')[0];
const text1 = $('#guide .page1 .text')[0];
TweenLite.from(logo, 2, {
    opacity: 0,
    ease: Power4.easeInOut
});
TweenLite.from(text1, 2, {
    opacity: 0,
    ease: Power4.easeInOut,
    delay: 1
});

var touch = {
    current: 1
};
// guide.on('touchstart', start)
// guide.on('touchmove', move)
// guide.on('touchend', end)
// function start() {
//     event.preventDefault();
//     touch.initiated = true;
//     const t = event.touches[0];
//     touch.startX = t.pageX;
//     touch.startY = t.pageY;
// }
// function move() {
//     if (!touch.initiated) {
//         return
//     }
//     const t = event.touches[0];
//     const deltaY = t.pageY - touch.startY;
//     const deltaX = t.pageX - touch.startX;
//     if (Math.abs(deltaY) > Math.abs(deltaX)) {
//         return
//     }
//     // 左移距离
//     const left =
// }
// function end() {
//     console.log(touch.deltaY);
//     TweenLite.to(this, 0.8, {
//         ease: Elastic.easeOut.config(1, 0.3),
//         scale: 1,
//         y: 0
//     })
//     TweenLite.to(dot, 0.8, {
//         ease: Elastic.easeOut.config(1, 0.3),
//         y: 0
//     })
//     TweenLite.to(counter, 0.8, {
//         ease: Elastic.easeOut.config(1, 0.3),
//         rotation: 0
//     })
//     TweenLite.to(clock, 0.8, {
//         ease: Elastic.easeOut.config(1, 0.3),
//         rotation: 0
//     })
//     TweenLite.to(circleBg, 0.8, {
//         ease: Elastic.easeOut.config(1, 0.3),
//         scale: 1
//     })
//     touch.initiated = false;
//
// }
