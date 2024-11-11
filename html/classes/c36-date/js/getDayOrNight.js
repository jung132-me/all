function getDayOrNight(){
    let now = new Date() //현재시간과 날짜 정보 저장
    let hours = now.getHours() // 0~23시간을 리턴
    let minutes = now.getMinutes() //0~59분을 리턴
//낮시간은  9시 40분부터 18시 5분까지
if((hours>9 && hours<18) || (hours==9 && minutes>=40) || (hours==18 && minutes<5)){
    return "낮"
}else{
    return "밤"
}
}
console.log(getDayOrNight())