// page1 Ani
var logo = $('#guide .page1 .logo')[0];
var text1 = $('#guide .page1 .text')[0];
TweenLite.to(logo, 0.75, {
    opacity: 1,
    ease: Power4.easeInOut
});
TweenLite.from(text1, 0.75, {
    opacity: 0,
    ease: Power4.easeInOut,
    delay: 0.5
});
// page2 Ani
function page2Ani() {
    var time = 0.1;
    var circle1 = $('.circle1')[0];
    TweenLite.from(circle1, 1.5, {
        ease: Elastic.easeOut.config(1, 0.5),
        opacity: 0,
        scale: 0.3,
        delay: time,
        transformOrigin: 'center center'
    });
    var circle2 = $('.circle2')[0];
    TweenLite.from(circle2, 1, {
        ease: Elastic.easeOut.config(1, 0.5),
        opacity: 0,
        scale: 0,
        delay: time + 0.1,
        transformOrigin: 'center center'
    });
    var circle3 = $('.circle3')[0];
    TweenLite.from(circle3, 0.8, {
        ease: Elastic.easeOut.config(1, 0.5),
        opacity: 0,
        scale: 0.1,
        transformOrigin: 'center center',
        delay: 0.2 + time
    });
    var logo2 = $('.page2 .logo')[0];
    TweenLite.from(logo2, 1, {
        ease: Power4.easeInOut,
        opacity: 0,
        delay: 0.5 + time
    })

    TweenLite.from($('.mini1')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        opacity: 0,
        scale: 0,
        transformOrigin: 'center',
        delay: 1.3 + time
    })
    TweenLite.from($('.mini2')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        scale: 0,
        transformOrigin: 'center',
        opacity: 0,
        delay: 1.45 + time
    })
    TweenLite.from($('.mini3')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        opacity: 0,
        scale: 0,
        transformOrigin: 'center',
        delay: 1.6 + time
    })
    TweenLite.from($('.mini4')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        opacity: 0,
        scale: 0,
        transformOrigin: 'center',
        delay: 1.75 + time
    })
    TweenLite.from($('.mini5')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        opacity: 0,
        scale: 0,
        transformOrigin: 'center',
        delay: 1.9 + time
    });
    TweenLite.from($('.mini6')[0], 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        opacity: 0,
        scale: 0,
        transformOrigin: 'center',
        delay: 2.05 + time
    });
    TweenLite.from($('.page2 .text')[0], 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        delay: 2 + time
    });
    TweenLite.from($('.page2 .start')[0], 0.5, {
        ease: Power4.easeInOut,
        opacity: 0,
        delay: 2.2 + time
    });
}
var touch = {
    current: 0,
    percent: 1,
    ani: false
};
$('#down').on('touchstart', down).on('touchend', up);
function down() {
    TweenLite.to(this, 0.2, {
        scale: 0.7,
        transformOrigin: 'center'
    });
    TweenLite.to($('.mini1')[0], 0.2, {
        x: 50,
        y: -20
    });
    TweenLite.to($('.mini2')[0], 0.2, {
        x: 50,
        y: 20
    });
    TweenLite.to($('.mini3')[0], 0.2, {
        x: 5,
        y: 65
    });
    TweenLite.to($('.mini4')[0], 0.2, {
        x: -5,
        y: 55
    });
    TweenLite.to($('.mini5')[0], 0.2, {
        x: -45,
        y: 10
    });
    TweenLite.to($('.mini6')[0], 0.2, {
        x: -35,
        y: -15
    });
}
function up() {
    TweenLite.to(this, 0.5, {
        ease: Elastic.easeOut.config(1.2, 0.4),
        scale: 1,
        transformOrigin: 'center'
    });
    var mini = $('.mini')
    for(var i = 0; i < mini.length; i++) {
        TweenLite.to(mini[i], 0.5, {
            ease: Elastic.easeOut.config(1.2, 0.4),
                x: 0,
                y: 0
        })
    }
}

$('#guide').on('touchstart', start).on('touchmove', move).on('touchend', end)
function start() {
    event.preventDefault();
    touch.initiated = true;
    var t = event.touches[0];
    touch.startX = t.pageX;
    touch.startY = t.pageY;
}
function move() {
    if (!touch.initiated) {
        return;
    }
    touch.move = true;
    var t = event.touches[0];
    var deltaY = t.pageY - touch.startY;
    var deltaX = t.pageX - touch.startX;
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
    }
    // 左移距离
    var left = touch.current === 0 ? 0 : -window.innerWidth;
    var offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX));
    // percent
    touch.percent = Math.abs(offsetWidth / window.innerWidth)
    TweenLite.to(this, 0.1, {
        x: offsetWidth
    });
    console.log(deltaY);
    if (!touch.ani && deltaX < 0 && touch.percent > 0.05) {
        touch.ani = true;
        page2Ani();
    }
}
function end() {
    var offsetWidth
    if (!touch.move) {
        return
    }
    if(touch.current === 0) {
        if (touch.percent > 0.05) {
            offsetWidth = -window.innerWidth;
            touch.current = 1;
          } else {
            offsetWidth = 0;
        }
    } else {
        if (touch.percent < 0.95) {
            offsetWidth = 0;
            touch.current = 0;
        } else {
            offsetWidth = -window.innerWidth;
        }
    }
    TweenLite.to(this, 0.3, {
        x: offsetWidth
    });
    touch.initiated = false;
    touch.move = false;
}
