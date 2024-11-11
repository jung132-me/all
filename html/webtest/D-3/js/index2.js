$(document).ready(function(){

//팝업
    
  $("#btn_open").click(function(){
    $(".popup").addClass("on")

  })
  $(".btn_close").click(function(){
    $(".popup").removeClass("on")

  })

//탭메뉴

$(".tabs>a").click(function(){
    $(".tabs>a").removeClass("on") //모든 탭 비활성화
    $(this).addClass("on") //클릭한 탭만 활성화하는 스타일
    let idx = $(this).index() //내가 클릭한 탭의 부모태그기준 순번을 저장 0 또는 1이 저장
    $(".tab_contents>ul").removeClass("on") // ul태그가 전부 안보이게 됨
    $(".tab_contents>ul").eq(idx).addClass("on") // 내가 클릭한 탭의 순번과 일치하는 ul태그에 on클래스가 붙어서 보이게 됨.


})

//슬라이드

    let count = 0
    
    
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)



})