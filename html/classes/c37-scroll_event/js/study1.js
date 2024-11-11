window.onload=function(){
    
let btn_top = document.querySelector(".btn_top")

    // 스크롤바가 움직일 때 
    window.addEventListener("scroll",function(){
        let distance = window.scrollY
        //window.scrollY 는 현재 브라우저 뷰포트(화면)이 전체문서의 상단부분에서 얼만큼 떨어져 있는지를 계산하는 변수이다. 스크롤바가 최상단에 붙어있으면 0이고, 스크롤을 하단으로 내리면 그만큼 거리가 증가한다.
        console.log(distance)

        if(distance>500){
            //위로 올라가기 버튼이 보이게
            btn_top.classList.add("on")
        }else{
            //위로 올라가기 버튼이 보이지 않게
            btn_top.classList.remove("on")
        }
    })

    //위로가기 버튼을 클릭하면 페이지 최상단으로 부드럽게 스크롤하여 이동되는 기능
    btn_top.addEventListener("click",function(){
        window.scrollTo({top:0,behavior:"smooth"})
    })
}