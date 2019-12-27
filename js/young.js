$(function(){
    //点击关闭视频
    $('.delete-video').click(function(){
        $('.video-section').css('display','none');
    });  
    //点击打开视频
    $('.watch-vedio').click(function(){
        $('.video-section').css('display', 'block');
        $('#video').play();
    })
    $.ajax({
        url:'./data/yound.json',
        type:'get',
        data:'abc=345',
        dataType:'json',
        cache:false,
        success:function(data){
            console.log(data);
            var results = '';
            $.each(data.yound, function(index,item){
                results += `<li>
                        <div class="pro-oic">
                            <a href="">
                                <img src="${item.imges1}" alt="">
                            </a>
                        </div>
                        <p class="pro-name">
                            <a href="">${item.name1}</a>
                        </p>
                        <p class="pro-desc"></p>
                        <p class="price">
                            <span>${item.retail}&nbsp;</span>
                            ${item.price}
                        </p>
                    </li>`
            })
            $('.recommend-list').html(results);
        }
    })
})