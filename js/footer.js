$(function() {
    $('.ocail-share-img').hover(function() {
        $('.img-none').css('display','block');
        $('.img-none').hover(function() {
            $(this).css('display', 'block');
        },function(){
                $(this).css('display', 'none');
        });
    },function() {
            $('.img-none').css('display', 'none');
    });

    $('.ocail-share-img2').hover(function () {
        $('.img-none2').css('display', 'block');
        $('.img-none2').hover(function () {
            $(this).css('display', 'block');
        }, function () {
            $(this).css('display', 'none');
        });
    }, function () {
        $('.img-none2').css('display', 'none');
    });

    $('.icon-wx').hover(function () {
        $('.img-none3').css('display', 'block');
        $('.img-none3').hover(function () {
            $(this).css('display', 'block');
        }, function () {
            $(this).css('display', 'none');
        });
    }, function () {
        $('.img-none3').css('display', 'none');
    });

    $('.icon-wb').hover(function () {
        $('.show-img').stop().animate({ opacity: 1 }, 200);
        // $('.show-img').stop().animate({ right: 64 + 'px' }, 300);
        $('.show-img').css('right', 64 + 'px');
    }, function () {
        $('.show-img').stop().animate({ right: 5 + 'px' },200,function () {
            $('.show-img').stop().animate({ opacity: 0},50);
        });
    });

});