$(document).ready(function(){

    $("#btn_open").click(function(){
        $(".popup").addClass("on")
    })

    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })


    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform", `translate(${-33.333*count}%)`)
    },2500)

})