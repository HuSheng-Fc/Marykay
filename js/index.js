$(function(){
    //移入换背景颜色
    function toClocr(domPar, dom, left) {
        $(domPar).hover(function () {
            $(dom).stop().animate({ left: 0 + 'px' }, 500);
        }, function () {
            $(dom).stop().animate({ left: -left + 'px' }, 500);
        });
    };

    toClocr('.more-business', '.angla-h', 132);
    toClocr('.btn-black', '.angla', 120);

    //页面滚动条事件
    $(document).scroll(function () {
        var scrolT = $(document).scrollTop();//滚动高度
        var top = parseInt($('.top-nav').height());//获取warp的高度
        // console.log(top);
        //判断滚动长度
        if (scrolT >  40) {
            $('.top-bar').addClass('absolute');
            $('.scroll-img').addClass('relative');
            $('.main').css({
                marginTop: 210 +'px',
            });
        }else{
            $('.top-bar').removeClass('absolute');
            $('.scroll-img').removeClass('relative');
            $('.main').css({
                marginTop: 110 + 'px',
            });
        };
    });
    //移入字体获取焦点->图片透明度切换->文字详情上下切换
    $('.line-nav').on('mouseenter','li',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var Hindex = $(this).index();//移入获取下标
        // console.log(Hindex);
        switch (Hindex) {
            case 0:
                $('.wapper-ab').css('top', 0 + 'px');//文字信息切换
                $('.pic-list img').removeClass('opacity');//清除透明度CLASS
                $('.pic-list img').eq(Hindex).addClass('opacity');//添加
                break;
            case 1:
                $('.wapper-ab').css('top', -78 + 'px');
                $('.pic-list img').removeClass('opacity');
                $('.pic-list img').eq(Hindex).addClass('opacity');
                break;
            case 2:
                $('.wapper-ab').css('top', -186 + 'px');
                $('.pic-list img').removeClass('opacity');
                $('.pic-list img').eq(Hindex).addClass('opacity');
                break;
            case 3:
                $('.wapper-ab').css('top', -269 + 'px');
                $('.pic-list img').removeClass('opacity');
                $('.pic-list img').eq(Hindex).addClass('opacity');
                break;
            case 4:
                $('.wapper-ab').css('top', -358 + 'px');
                $('.pic-list img').removeClass('opacity');
                $('.pic-list img').eq(Hindex).addClass('opacity');
                break;
        }
    })
    //获取变动元素的right属性值
    var bgRight = parseInt($('.background').css('right'));
    
    //li元素移入事件
    $('.js-img-card').on('hover','li',function(){
        //添加删除class
        $(this).siblings().removeClass('hover-top');
        $(this).addClass('hover-top');
        //获取每个li元素距离父元素左边的距离 - 10
        var colorPX = $(this).offset().left - $('.img-card').offset().left - 10;
        $('.background').css('right', bgRight - colorPX + 'px');//赋值
        //获取移入li元素的下标
        var liIdex = $(this).index();
        //获取每个上下移动div元素的高
        var DivHeight = parseInt($('.text-concent div').height()) + parseInt($('.text-concent div').css('marginBottom'));
        //通过下标判断
        if (liIdex == 2) {
        $('.text-concent').css('top', 0 + 'px');
        } else if (liIdex == 1){
            $('.text-concent').css('top', -DivHeight + 'px');
        } else if (liIdex == 0){
            $('.text-concent').css('top', -(DivHeight*2) + 'px');
        };
    });
    //左侧固定导航点击事件
    $('.fixed-list').on('click','li',function(){
        $(this).siblings().removeClass('hover-v');
        $(this).addClass('hover-v');
        var liInd = $(this).index();
        // var t = $(document).scrollTop();
        //通过下标判断给滚动条赋值
        switch (liInd) {
            case 0:
                $('body,html').animate({ 'scrollTop': 0 }, 500);
                break;
            case 1:
                $('body,html').animate({ 'scrollTop': 640 }, 500);
                break;
            case 2:
                $('body,html').animate({ 'scrollTop': 1200 }, 500);
                break;
            case 3:
                $('body,html').animate({ 'scrollTop': 1806 }, 500);
                break;
            case 4:
                $('body,html').animate({ 'scrollTop': 2416 }, 500);
                break;
        };
    });
    var setTime;
    //进入页面左侧固定导航栏显示21.5秒后隐藏
    function autoMove() {
        clearTimeout(setTime);
        setTime = setTimeout(function () {
            var enterL = $('.js-main-pagination').width();
            $('.js-main-pagination').css('left', -enterL + 'px');//赋值
        },1500);
    }
    autoMove();
    //左侧固定导航移入移出显示隐藏
    $('.fixed-list').on('mouseenter','li', function () {
        //获取移入显示的像素
        var leaveL = $('.fixed-list').width();
        $('.js-main-pagination').css('left',leaveL + 'px');//赋值
        //移入左侧固定导航条显示的信息显示
        $('.js-main-pagination').on('mouseenter', 'li', function () {
            var leaveL = $('.fixed-list').width();
            $('.js-main-pagination').css('left', leaveL + 'px');//赋值
        });
        //移入左侧固定导航条显示的信息隐藏
        $('.js-main-pagination').on('mouseleave', 'li', function () {
            var enterL = $('.js-main-pagination').width();
            $('.js-main-pagination').css('left', -enterL + 'px');//赋值
        });
    });
    $('.fixed-list').on('mouseleave', 'li', function () {
        //获取移出隐藏的像素
        var enterL = $('.js-main-pagination').width();
        $('.js-main-pagination').css('left', -enterL + 'px');//赋值
    });
    //点击含有文字的
    $('.js-fixed-list').on('click','li',function(){
        var liInd = $(this).index();//获取点击元素下标
        var list = $('.fixed-list li');//获取li伪元素集合
        //通过下标判断
        switch (liInd) {
            case 0:
                list.removeClass('hover-v');
                list.eq(liInd).addClass('hover-v');//添加
                $('body,html').animate({ scrollTop: 0 }, 500);
                break;
            case 1:
                list.removeClass('hover-v');
                list.eq(liInd).addClass('hover-v');//添加
                $('body,html').animate({ scrollTop: 630 }, 500);
                break;
            case 2:
                list.removeClass('hover-v');
                list.eq(liInd).addClass('hover-v');//添加
                $('body,html').animate({ scrollTop: 1260 }, 500);
                break;
            case 3:
                list.removeClass('hover-v');
                list.eq(liInd).addClass('hover-v');//添加
                $('body,html').animate({ scrollTop: 1890 }, 500);
                break;
            case 4:
                list.removeClass('hover-v');
                list.eq(liInd).addClass('hover-v');//添加
                $('body,html').animate({scrollTop: 2520 }, 500);
                break;
        };
    });
    //监听鼠标滚动条事件
    var index = 0;
    $(document).on('mousewheel', function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
        var scroolT = $(window).scrollTop();
        var list = $('.fixed-list li');//获取li伪元素集合
        if (delta > 0) {
            scroolT -= 630;//每次向上滚动的距离-
            $('body,html').stop().animate({ 'scrollTop': scroolT }, 500);//生成动画效果
        } else if (delta < 0) {
            scroolT += 630;//每次向下滚动的距离+
            $('body,html').stop().animate({ 'scrollTop': scroolT }, 500);
        };
        //通过判断滚动条高度与左侧固定导航条联动
        if (scroolT <= 630) {
            list.removeClass('hover-v');
            list.eq(0).addClass('hover-v');//添加
        };
        if (scroolT >= 630) {
            list.removeClass('hover-v');
            list.eq(1).addClass('hover-v');//添加
        };
        if (scroolT >= 1260) {
            list.removeClass('hover-v');
            list.eq(2).addClass('hover-v');//添加
        };
        if (scroolT >= 1890) {
            list.removeClass('hover-v');
            list.eq(3).addClass('hover-v');//添加
        };
        if (scroolT >= 2518) {
            list.removeClass('hover-v');
            list.eq(4).addClass('hover-v');//添加
        };
    });
});