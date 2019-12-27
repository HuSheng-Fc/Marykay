$(function(){
    //点击显示登录模块
    $('.logLink').click(function () {
        $('.loginForm').css('display', 'block');
        $('.opacityDiv').css('display', 'block');
    });
    //点击隐藏登录模块
    $('.loginClose').click(function(){
        $('.loginForm').css('display','none');
        $('.opacityDiv').css('display','none');
    });
    //头部点击显示隐藏二维码
    $('.hid-ewm').click(function(){
        $('.logCode').css('display', 'none');
        $('.more-bu').css('display', 'block');
    });
    $('.show-ewm').click(function () {
        $('.more-bu').css('display', 'none');
        $('.logCode').css('display', 'block');
    });
    //随机验证码
    var code;
    function ceartCode() {
        code = '';
        var codeLength = 4;//验证码长度
        //验证码组成部分
        var codechars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'Kk', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
            var charNum = Math.floor(Math.random() * 52);//设置随机生成
            code += codechars[charNum];
        };
        $('.veriFication b').html(code);
    };
    setTimeout(() => {
        ceartCode();
    }, 0);
    //点击切换验证码
    $('.changeValidCode').click(function(e){
        ceartCode();
    });
    //点击登录
    $('.input_submit').click(function(){
        var veriFication = $('.veriFication b').html();
        var inVal = $('.input_text_code').val();
        // console.log(inVal);
        if (veriFication !== inVal) {
            // alert('验证码错误');
            $('.errorBox').css('display', 'block');
            $('.error-text').html('验证码错误')
            ceartCode();
            return;
        }else{
            ajaxJson({//调用数据信息
                status: 'login',
            });
        };
    });
    var time;
    function login(){
        clearTimeout(time);
        time = setTimeout(function(){
            // window.location.replace("index.html");
            // window.location.href ="index.html";
            window.location.href ="./index.html";
        },1000);
    };
    //数据请求
    function ajaxJson(a) {
        $.ajax({
            url: './data/login2.php',
            type: 'get',
            cache: false,
            data: 'act=' + a.status + '&user=' + $('.nput_text').val() + '&pass=' + $('.input_pass').val(),
            dataType: 'json',
            success: function (data) {
                alert(data.msg)
                var msg = data.err;
                if (msg != '1') {
                    login();
                }else{
                    $('.errorBox').css('display', 'block');
                    ceartCode();
                    return false;
                };
                // return data;
            },
            error: function (err) {
                alert('请求数据失败！');
            }
        });
    };
    // $('.regLink').click(function () {
    //     // console.log(ccc);
        
    //     ajaxJson({//调用数据信息
    //         status: 'add'
    //     });
    // })
    //点击隐藏登录
    $('.delete').click(function(){
        $('.errorBox').css('display', 'none');
    });
});