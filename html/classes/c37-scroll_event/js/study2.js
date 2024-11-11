
window.onload = function(){
   
    // smoothScrollMove(".gnb")
    let percentBar = document.querySelector(".percentBar")
    let percent = document.querySelector(".percent")

   window.addEventListener("scroll",function(){
        percentBar.style.width = getScrollPer(3).per100+"%"
        percent.innerHTML = getScrollPer().per100
   })
    
}
