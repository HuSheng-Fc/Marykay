$(document).scroll(function () {
    var scrolT = $(document).scrollTop();//滚动高度
    var top = parseInt($('.top-nav').height());//获取warp的高度
    console.log(top);
    //判断滚动长度
    if (scrolT > 40) {
        $('.top-bar').css({
            position: 'absolute',
            'top':-40 +'px',
        });
    } else {
        $('.top-bar').css({
            position: 'relative',
            'top': 0 + 'px',
        });
    };
});