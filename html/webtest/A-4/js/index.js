window.addEventListener("load",function(){

    //팝업
    let btn_open = this.document.querySelector("#btn_open")
    let popup = this.document.querySelector(".popup")
    let btn_close = this.document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    //슬라이드


    let count = 0
    let slide = this.document.querySelectorAll(".train>li")

    this.setInterval(function(){
        count++
        if(count>2){count=0}
        // slide[0].classList.remove("on")
        // slide[1].classList.remove("on")
        // slide[2].classList.remove("on")

        for(let i=0; i<3;i++){
            slide[i].classList.remove("on")
        }
        
        slide[count].classList.add("on")
    },2500)





})