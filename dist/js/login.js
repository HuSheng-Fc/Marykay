"use strict";$(function(){var n,i;function c(){n="";for(var o=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","Kk","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),i=0;i<4;i++){var c=Math.floor(52*Math.random());n+=o[c]}$(".veriFication b").html(n)}$(".logLink").click(function(){$(".loginForm").css("display","block"),$(".opacityDiv").css("display","block")}),$(".loginClose").click(function(){$(".loginForm").css("display","none"),$(".opacityDiv").css("display","none")}),$(".hid-ewm").click(function(){$(".logCode").css("display","none"),$(".more-bu").css("display","block")}),$(".show-ewm").click(function(){$(".more-bu").css("display","none"),$(".logCode").css("display","block")}),setTimeout(function(){c()},0),$(".changeValidCode").click(function(o){c()}),$(".input_submit").click(function(){var o;if($(".veriFication b").html()!==$(".input_text_code").val())return $(".errorBox").css("display","block"),$(".error-text").html("验证码错误"),void c();o={status:"login"},$.ajax({url:"./data/login2.php",type:"get",cache:!1,data:"act="+o.status+"&user="+$(".nput_text").val()+"&pass="+$(".input_pass").val(),dataType:"json",success:function(o){if(alert(o.msg),"1"==o.err)return $(".errorBox").css("display","block"),c(),!1;clearTimeout(i),i=setTimeout(function(){window.location.href="./index.html"},1e3)},error:function(){alert("请求数据失败！")}})}),$(".delete").click(function(){$(".errorBox").css("display","none")})});