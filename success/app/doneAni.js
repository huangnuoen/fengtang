TweenLite.from($('#circle'), 0.8, {
    ease: Elastic.easeOut.config(1, 1),
    scale: 0,
    transformOrigin: 'center'
});
TweenLite.from($('.text')[0], 0.6, {
    ease: Power4.easeInOut,
    opacity: 0,
    delay: 1.2
});
TweenLite.from($('.btn')[0], 0.6, {
    ease: Power4.easeInOut,
    opacity: 0,
    delay: 1.2
});
TweenLite.from($('#dot'), 0.4, {
    scale: 0,
    transformOrigin: 'center',
    delay: 1.6
});
TweenLite.from($('.add')[0], 1, {
    ease: Elastic.easeOut.config(1.2, 0.5),
    rotation: -180,
    transformOrigin: 'center',
    delay: 2
});
TweenLite.from($('.add')[1], 1, {
    ease: Elastic.easeOut.config(1.2, 0.5),
    rotation: -180,
    transformOrigin: 'center',
    delay: 2
});

