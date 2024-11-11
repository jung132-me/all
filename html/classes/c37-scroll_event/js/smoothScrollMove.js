function smoothScrollMove(classname){

    //1. 이 함수를 사용하기 위해서는 ul태그 자식 li태그의 자식 a태그를 만들어 놓고,
    //2. ul태그에게 원하는 클래스를 설정하고,
    //3. a태그(href)에는 부드럽게 이동하는 목적지 태그의 id를 #idname과 같이 입력해 놓고,
    //4. 목적지 태그에는 id를 설정해야 한다.
    //5. 사용 예는 smoothScrollMove(".gnb") 이런 식으로 사용한다. 


    function getTagTop(tag){
        //이 함수는 선택한 태그가 전체문서기준 위에서 얼마만큼 떨어져 있는지를 계산하여 픽셀값으로 리턴하는 함수이다.
        return tag.getBoundingClientRect().top + window.scrollY
    }

    
    //getBoundingClientRect() 함수는 선택한 태그의 뷰포트(화면) 기준 화면의 상단에서 선택한 태그의 상단까지의 거리를 리턴한다.


    let gnb = document.querySelector(classname)
    let gnb_li_array = gnb.children

    for(let i=0; i<gnb_li_array.length; i++){
        gnb_li_array[i].addEventListener("click",function(e){
            let selector = gnb_li_array[i].children[0].getAttribute("href")
            e.preventDefault() //a태그 본연의 새로고침시키는 기능을 억제
           window.scrollTo({
            top:getTagTop(document.querySelector(selector)),
            behavior:"smooth"
           })
        })
    }  
}