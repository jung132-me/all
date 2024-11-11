window.addEventListener("click",function(){

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
   let train = document.querySelector(".train")

   this.setInterval(function(){
    count++
    if(count>2){count=0}
    train.style.transform = `translateX(${-33.333*count}%)`
   },2500)


})