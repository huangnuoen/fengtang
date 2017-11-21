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

// page2 Ani
const circle1 = $('.circle1')[0];
TweenLite.from(circle1, 0.7, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0.3,
    transformOrigin: 'center center'
});
const circle2 = $('.circle2')[0];
TweenLite.from(circle2, 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center center'
});
const circle3 = $('.circle3')[0];
TweenLite.from(circle3, 0.5, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    scale: 0.1,
    transformOrigin: 'center center',
    delay: 0.2
});
const logo2 = $('.page2 .logo')[0];
TweenLite.from(logo2, 1, {
    ease: Power4.easeInOut,
    opacity: 0,
    delay: 0.5
})

TweenLite.from($('.mini1')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center',
    delay: 1.5
})
TweenLite.from($('.mini2')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    scale: 0,
    transformOrigin: 'center',
    opacity: 0,
    delay: 1.7
})
TweenLite.from($('.mini3')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center',
    delay: 1.9
})
TweenLite.from($('.mini4')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center',
    delay: 2.1
})
TweenLite.from($('.mini5')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center',
    delay: 2.3
});
TweenLite.from($('.mini6')[0], 0.8, {
    ease: Elastic.easeOut.config(1.2, 0.4),
    opacity: 0,
    scale: 0,
    transformOrigin: 'center',
    delay: 2.5
})


var touch = {
    current: 1
};
$('#down').on('touchstart', down).on('touchend', up);
function down() {
    TweenLite.to(this, 0.2, {
        scale: 0.8,
        transformOrigin: 'center'
    });
    TweenLite.to($('.mini1')[0], 0.2, {
        x: 50,
        y: -20
    });
    TweenLite.to($('.mini2')[0], 0.2, {
        x: 50,
        y: -15
    });
    TweenLite.to($('.mini3')[0], 0.2, {
        x: 5,
        y: 40
    });
    TweenLite.to($('.mini4')[0], 0.2, {
        x: -5,
        y: 30
    });
    TweenLite.to($('.mini5')[0], 0.2, {
        x: -25,
        y: 5
    });
    TweenLite.to($('.mini6')[0], 0.2, {
        x: -25,
        y: -10
    });
}
function up() {
    TweenLite.to(this, 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        scale: 1,
        transformOrigin: 'center'
    });
    const mini = $('.mini')
    for(var i = 0; i < mini.length; i++) {
        TweenLite.to(mini[i], 0.5, {
            ease: Elastic.easeOut.config(1.2, 0.4),
                x: 0,
                y: 0
        })
    }
}

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
