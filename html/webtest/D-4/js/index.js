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


   let count = 0
   let train = this.document.querySelectorAll(".train>li")

   this.setInterval(function(){
    count++
    if(count>2){count=0}
    train[0].classList.remove("on")
    train[1].classList.remove("on")
    train[2].classList.remove("on")
    train[count].classList.add("on")

   },2500)



})
