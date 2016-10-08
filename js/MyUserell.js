/**
 * Created by sam on 2016/8/9.
 */
///**
// * Created by sam on 2016/8/9.
// */
window.onload= function () {
    //$(function () {
    //input样式的改变 获得焦点改变input宽度
    $('.nav-center>input').on('focus', function () {
        $(this).animate({'width':'95px'},10).css('backgroundColor','white');
    });
    //失去焦点恢复input样式
    $('.nav-center>input').on('blur', function () {
        $(this).animate({'width':'65px'},10).css('backgroundColor','#ededed');
    });
    //});

    //隐藏盒子部分
    //注册登录下面的隐藏盒子的操作
    $('.nav-center span').on('mouseover', function () {
        $('.hidebox').fadeIn(500);
    });
    $(document).on('click', function () {
        $('.hidebox').fadeOut(500);
    });


    //鼠标移入显示音乐期刊部分的精灵图
    $('.music_center_left').on('mouseenter', function () {
        $('.music_center_left span').show(200).css('cursor','pointer');
        $('.blackbu').css('opacity',0.5).show();
    });
    $('.music_center_left').on('mouseleave', function () {
        $('.music_center_left span').hide(200);
        $('.blackbu').css('opacity',1).hide();
    });


    $('.music_center_right').on('mouseenter', function () {
        $('.music_center_right span').show(200);
        $('.picback1').css('opacity',0.5).show();
    });
    $('.music_center_right').on('mouseleave', function () {
        $('.music_center_right span').hide(200);
        $('.picback1').css('opacity',0.5).hide();
    });

};


//banner轮播图
$(function () {
    var timer = null;
    var pic;//声明一个全局变量，全局变脸才能在局部变量之外使用
    $(".circulation_point ul li").click(function () {//给按钮添加鼠标移入事件
        clearInterval(timer);
        pic = $(".circulation_point ul li").index(this);//获取当前按钮的小标
        console.log(pic);
        //              注意这里使用的是this当前的，不然总是获取到第一个按钮
        $(".circulation_pic ul li:eq("+pic+")")
            .fadeIn()
            .siblings()
            .fadeOut();
        // $(".banner ol").css("zIndex",z++);
    });
    $(".circulation_point ul").mouseleave(function () {
        playNext();
    });
    playNext();
    function playNext() {
        var i=0;
        timer = setInterval(function(){
            // for (var i = 0; i <4; i++) {
            // pic =$(".banner ol li").eq(0);//获取当前按钮的小标
            // console.log(pic);
            //              注意这里使用的是this当前的，不然总是获取到第一个按钮
            if(i<5){
                console.log(i);

                $(".circulation_pic ul li:eq("+i+")")
                    // .css("zIndex",1)
                    .fadeIn()
                    .siblings()
                    .fadeOut();
                    // .css("zIndex",0);


                // $(".circulation_point ul").css("zIndex",z++);
                i++;
            }else{
                i=0;
                $(".circulation_pic ul li:eq("+i+")")
                // .css("zIndex",1)
                    .fadeIn()
                    .siblings()
                    .fadeOut();
                // .css("zIndex",0);
                // $(".banner ol").css("zIndex",z++);
                i++;
            }
            // }
        },3000);
    };
});
