$(document).ready(function(){

    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    //탭 변환
    $(".tabs a").click(function(){
        $(".tabs a").removeClass("on")
        $(this).addClass("on")

        let idx = $(this).index()
        $(".tab_contents>ul").removeClass("on")
        $(".tab_contents>ul").eq(idx).addClass("on")
    })
    

    //슬라이드
    let count = 0
    setInterval(function(){

        count++
        if(count>2){count=0} //0,1,2,0,1,2....반복
        $(".train>li").removeClass("on") 
        $(".train>li").eq(count).addClass("on")    
    },2500)



})