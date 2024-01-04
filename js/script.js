$(function(){
    //메인메뉴 슬라이드
    $(".main > li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })//

    $(".main > li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//


    //이미지슬라이드 fade in out
    // setInterval(function(){
    //     $(".move li:first").fadeOut(function(){
    //         $(this).appendTo($(".move")).fadeIn()
    //     })
    // }, 3000)



    // $(".move li:gt(0)").hide();
    $(".move li").eq(0).siblings().hide();

    // var n=0;

    // setInterval(fade, 3000);
    
    // function fade(){
    //     $(".move li").eq(n).fadeOut();

    //     if(n<2){
    //         n++;
    //     }else{
    //         n=0;
    //     }
    //     console.log(n);

    //     $(".move li").eq(n).fadeIn();        
    // }


    var current=0;
    setInterval(function(){
        if(current==2){
            current=0;
        }else{
            current++;
        }

        $(".move li").eq(current).siblings().fadeOut();
        $(".move li").eq(current).fadeIn();
    }, 3000)//


    

    //팝업

    $(".p_click").click(function(){
        $(".popup").fadeIn();
    })//

    $(".close").click(function(){
        $(".popup").fadeOut();
    })//

})//