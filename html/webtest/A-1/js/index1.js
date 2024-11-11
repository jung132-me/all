window.addEventListener("load",function(){

    //팝업기능
    let btn_open = document.querySelector("#btn_open")
    let popup = document.querySelector(".popup")
    let btn_close = document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        popup.classList.add(".on")
        //버튼을 눌렀을 때 팝업이 나타남
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove(".on")
    })

    //탭메뉴
    let tab_titles = document.querySelectorAll(".tabs>a")
    //탭제목 a태그들을 선택함
    let tab_lists = document.querySelectorAll(".tab_contents>ul")
    //탭내용 ul태그들을 선택함
    tab_titles.forEach(function(tab,index){
        //tab -> 각각의 a태그들을 가리킴
        //index -> 그 a태그들의 순번 0,1을 의미
        tab.addEventListener("click",function(){
            //탭 내용 활성화 기능
            tab_titles[0].classList.remove("on")
            tab_titles[1].classList.remove("on")
            tab.classList.add("on")
            //탭 내용 보이기 기능
            tab_lists[0].classList.remove("on")
            tab_lists[1].classList.remove("on")
            tab_lists[index].classList.add("on")
        })

    })
    //슬라이드
    let count = 0
    let train = document.querySelector(".train")
    setInterval(function(){
        //2.5초마다 실행되는 소스코드
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`

    },2500)


})