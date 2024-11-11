// this
// window
$(document).ready(function(){
    //문서가 읽혀진뒤 실행되는 소스코드

    $(".naverlink").css("text-decoration","none")
    let href = $(".naverlink").attr("href") //기존에 설정되어있던 속성값을 불러올 수 있다. 
    console.log(href)
    $(".naverlink").attr("href","http://www.daum.net") // 속성값을 다른값으로 바꿀 수 있다. 
    $(".naverlink").attr("target","_blank") //없던 속성도 새롭게 만들 수 있다.

    let txt = $(".a").html()
    console.log(txt) //html()함수는 선택한 태그의 내용을 함수가 사용되었던 자리에 문자데이터 형태로 남긴다.
    $(".a").html("<b>새롭게 바뀐 내용</b>") // html()함수는 입력하는 문자데이터에 태그형태가 있다면 태그로 생성하여 입력한다.
    $(".box").addClass("on") //on이라는 클래스를 추가한다.
    $(".box").addClass("active") // active라는 클래스를 추가한다.
    $(".box").removeClass("active") //active라는 클래스를 제거한다.

    $(".lists").children().css("border","1px solid #888")
    //선택한 태그의 자식 태그들을 선택할 수 있다. 
    $(".lists>li").css("background","pink") 
    // children()함수를 쓰지 않고도 선택자를 입력해서도 선택할 수 있다.
    $(".b").prev().css("color","purple")
    //선택한 태그의 이전형제 태그를 선택할 수 있다.
    $(".b").next().css("color","green")
    //선택한 태그의 다음형제 태그를 선택할 수 있다.
    $(".b").parent().css("border","1px solid #000")
    //선택한 태그의 부모태그를 선택할 수 있다.

    $(".btn").click(function(){
        $(".frame").css("color","orange")
        //클릭했을 때 실행되는 소스코드     
        $(this).prev().css("text-decoration","underline")
        //여기서 this를 적용시 이전에 선택한 .btn클래스를 의미한다. 
    })
    $(".frame").mouseover(function(){
        $(this).css("border","1px solid tomato")
        //여기서 this는 이전에 선택한 .frame클래스를 의미한다. 
    })
    $(".frame").mouseout(function(){
        // $(".frame").css("border","none")
        $(this).css("border","none")
        //여기서 this는 이전에 선택한 .frame클래스를 의미한다.
    })
    
    //index()함수 eq()함수
    $(".tab_lists>li").css("color","lightblue")
    $(".tab_lists>li").eq(1).css("font-weight","bold")
    $(".tab_lists>li").click(function(){
       let index = $(this).index()
        //클릭한 리스트(this가 특정대상으로 지정됨)의 부모기준 자식순번을 리턴함(0부터)
        alert(index)
    })
})