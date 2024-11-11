function getTagTop(tag){
    //이 함수는 선택한 태그가 전체문서기준 위에서 얼마만큼 떨어져 있는지를 계산하여 픽셀값으로 리턴하는 함수이다.
    return tag.getBoundingClientRect().top + window.scrollY
}