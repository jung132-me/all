window.onload=function(){
    let btn_popup = document.querySelector("#btn_popup")
       let popup = document.querySelector(".popup")
       let btn_close_popup = document.querySelector(".btn_close")
       let modal = document.querySelector(".modal")
       btn_popup.addEventListener("click",function(){
        popup.classList.add("on")
        modal.classList.add("on")
       })
       btn_close_popup.addEventListener("click",function(){
        popup.classList.remove("on") 
        modal.classList.remove("on")      
       })
}