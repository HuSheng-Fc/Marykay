$(function(){
    $('.top-nav-menu-list').on('mouseenter','.nav_itme',function(){
        //获取移入元素的距离
        var left = parseInt($(this).offset().left) - parseInt($(this).parent().offset().left);
        var width = $(this).width();//获取移入元素的宽 
        //设置下边框出现点
        $('.active-bar').css({
            'width': width +'px',
            'left': left +'px'
        });
        var top = parseInt($('.warp').height());//获取warp的高度
        $('.nav-closed').css({//赋值给nav-closed的top
            'top': top + 'px',
            'opacity': 1
        });
        
        var index = $(this).index()+1;//获取移入元素的下标+1
        //对应下标的元素显示隐藏
        $('.nav-' +index+ '-content').siblings().css('display', 'none');
        $('.nav-' + index + '-content').css('display', 'block');
        //移入二级菜单显示
        var _this = this;
        $('.nav-closed').mouseenter(function () {
            var top = parseInt($('.warp').height());//获取warp的高度
            $('.nav-closed').css({//赋值给nav-closed的top
                'top': top + 'px',
                'opacity': 1
            });
            var left = parseInt($(_this).offset().left) - parseInt($(_this).parent().offset().left);
            var width = $(_this).width();//获取移入元素的宽 
            $('.active-bar').css({
                'width': width + 'px',
                'left': left + 'px'
            });
        })
        $('.nav-closed').mouseleave(function () {
            var top = parseInt($('.nav-closed').height()) + parseInt($('.warp').height());
            $('.nav-closed').css({//赋值给nav-closed的top高
                'top': -top + 'px',
                'opacity': 0
            });
            $('.active-bar').css({
                'width': 0 + 'px',
                'left': -0 + 'px'
            });
        });
    });
    
    $('.top-nav-menu-list').on('mouseleave', '.nav_itme', function () {
        //设置下边框消失点
        $('.active-bar').css({
            'width': 0+ 'px',
            'left': -0 + 'px'
        });
        //获取warp + nav-closed的高之和
        var top = parseInt($('.nav-closed').height()) + parseInt($('.warp').height());
        $('.nav-closed').css({//赋值给nav-closed的top高
            'top': -top + 'px',
            'opacity': 0
        });
    })
    // 二级菜单点击事件
    $('.tab-title').on('click','li',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var bbb = $(this).index()+1;
        // console.log(bbb);
        $('.series-'+ bbb).siblings().css('display','none');
        $('.series-'+ bbb).css('display','block');
        $('.series-' + bbb).css('opacity', 0);
        $('.series-' + bbb).animate({ opacity: 0 }, 200, function () {
            $('.series-' + bbb).stop().animate({ 'opacity': 1 }, 200);
        });
    })
    //点击显示城市选择
    $('.icon-cn').click(function(){
        $('.global-area').css('display','block');
    })
    //点击隐藏城市选择
    $('.icon-global-close').click(function(){
        $('.global-area').css('display','none');
    })
    $.ajax({
        url: './data/data.json',
        type: 'get',
        data:'abc=123',
        dataType: 'json',
        cache: false,
        success: function(data){
            // console.log(data);
            var results1 = '';
            
            $.each(data.freebie, function(index,item){
                    results1 += `<li>
                        <a href="">
                            <img src="${item.images1}" alt="">
                            <p class="name">${item.title1}</p>
                        </a>
                    </li>`
            });
            $('.freebie').html(results1);
            var results2 = '';
            $.each(data.MediaAward,function(index,item){
                results2 += `<li>
                        <a href="javascript:void(0)">
                            <img src="${item.images2}" alt="">
                            <p class="name">${item.title2}</p>
                        </a>
                    </li>`
            })
            $('.MediaAward').html(results2);
            var results3 = '';
            $.each(data.productLine, function (index, item) {
                results3 += `<li>
                        <a href="javascript:void(0)">
                            <img src="${item.images3}" alt="">
                            <p class="name">${item.title3}</p>
                        </a>
                    </li>`
            })
            $('.productLine').html(results3);
            var results4 = '';
            $.each(data.products, function (index, item) {
                results4 += `<li>
                        <a href="">
                            <img src="${item.images4}" alt="">
                            <p class="name">${item.title4}</p>
                        </a>
                    </li>`
            })
            $('.products').html(results4);
            var results5 = '';
            $.each(data.Makeup, function (index, item) {
                results5 += `<li>
                        <a href="">
                            <img src="${item.images5}" alt="">
                            <p class="name">${item.title5}</p>
                        </a>
                    </li>`
            })
            $('.Makeup').html(results5);
            var results6 = '';
            $.each(data.ification, function (index, item) {
                results6 += `<li>
                        <a href="">
                            <img src="${item.images6}" alt="">
                            <p class="name">${item.title6}</p>
                        </a>
                    </li>`
            })
            $('.ification').html(results6);
            var results7 = '';
            $.each(data.Bodycare, function (index, item) {
                results7 += `<li>
                        <a href="">
                            <img src="${item.images7}" alt="">
                            <p class="name">${item.title7}</p>
                        </a>
                    </li>`
            })
            $('.Bodycare').html(results7);
            var results8 = '';
            $.each(data.maintenance, function (index, item) {
                results8 += `<li>
                        <a href="">
                            <img src="${item.images8}" alt="">
                            <p class="name">${item.title8}</p>
                        </a>
                    </li>`
            })
            $('.maintenance').html(results8);
            var results9 = '';
            $.each(data.mlkCause, function (index, item) {
                results9 += `<li>
                        <a href="">
                            <img src="${item.images9}" alt="">
                            <p class="name">${item.title9}</p>
                        </a>
                    </li>`
            })
            $('.mlkCause').html(results9);
            var results10 = '';
            $.each(data.withMlk, function (index, item) {
                results10 += `<li>
                        <a href="">
                            <img src="${item.images10}" alt="">
                            <p class="name">${item.title10}</p>
                        </a>
                    </li>`
            })
            $('.withMlk').html(results10);
        }
    })
})
