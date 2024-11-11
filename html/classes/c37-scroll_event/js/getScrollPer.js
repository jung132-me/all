function getScrollPer(digit=0){
    //전체 문서의 높이에서 뷰포트의 높이를 빼야함
let scrollHeight = document.documentElement.scrollHeight - window.innerHeight
   
//스크롤을 내린 거리
let scrollTop = window.scrollY

let scrollPer = (scrollTop / scrollHeight).toFixed(digit) //0~1
let scrollPer100 = (scrollTop / scrollHeight*100).toFixed(digit) //백분율 0~100%

return {per:scrollPer,per100:scrollPer100}
}
