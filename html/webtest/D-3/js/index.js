
window.addEventListener("load",function(){

})
//팝업

    let btn_open = this.document.querySelector("#btn_open")
    let btn_close = this.document.querySelector(".btn_close")
    let popup = this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
    popup.classList.add("on")

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")

    })

    let tabs = document.querySelectorAll(".tabs>a")
    let tab_contents = this.document.querySelectorAll(".tabs_contents>ul")

    tabs.forEach(function(tab,index){

        tabs.addEventListener("click",function(){
            tab.addEventListener("click",function(){
                tabs[0].classList.remove("on")
                tabs[1].classList.remove("on")
                tabs.classList.add("on")


                tab_contents[0].classList.remove("on")
                tab_contents[1].classList.remove("on")
                tab_contents[index].classList.add("on")
            })

        })

        let count = 0
        let slide = document.querySelectorAll(".train>li")

        setInterval(function(){
            count++
            if(count>2){count=0}

        })



        
    })




})