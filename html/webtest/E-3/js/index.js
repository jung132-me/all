window.addEventListener("load",function(){

    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })


    let count = 0
    let slide = this.document.querySelector(".train")

    this.setInterval(function(){
        count++
        if(count>2){count=0}
        slide.style.transform = `translateY(${-33.333*count}%)` 
    },2500)

})