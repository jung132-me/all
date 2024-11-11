window.onload=function(){
    let now = new Date() //현재시간과 날짜 정보가 저장이 됨.
    let month = document.querySelector("#month") //id는 중복이 불가하기 때문에 나중에 수정해야 할 때 오류 발생가능성이나 기억해야하는 부담이 없음.
    let date = document.querySelector("#date")
    let day = document.querySelector("#day")
    let hour = document.querySelector("#hour")
    let minute = document.querySelector("#minute")
    let second = document.querySelector("#second")
 

    let monthArrayEn =[
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    
    let dayArrayEn = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    
    // function getDateString(date){
    //     let result 
    //     if(date==1){
    //         result = date+"st"
    //     }else if(date==2){
    //         result = date+"nd"
    //     }else if(date==3){
    //         result = date+"rd"
    //     }else if(date>=4 && date <=20){
    //         result = date+"th"
    //     }else if(date==21){
    //         result = date+"st"
    //     }else if(date==22){
    //         result = date+"nd"
    //     }else if(date==23){
    //         result = date+"rd"
    //     }else if(date>=24 && date<=30){
    //         result = date+"th"
    //     }else if(date==31){
    //         result = date+"st"
    //     }
    //     return result

    // }

  
    //각각의 태그에 현재 시간 날짜정보를 입력
    month.innerHTML = monthArrayEn[now.getMonth()]
    date.innerHTML = getDayWithSuffix(now.getDate()) 
    day.innerHTML = dayArrayEn[now.getDay()] 
    hour.innerHTML = now.getHours()<10?"0"+ now.getHours():now.getHours()
    minute.innerHTML = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
    second.innerHTML = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()

    // 1초마다 현재시간날짜정보를 span에 갱신
    let clockTimer = setInterval(function(){
        let now = new Date()
        month.innerHTML = monthArrayEn[now.getMonth()]
        date.innerHTML = getDayWithSuffix(now.getDate()) 
        day.innerHTML = dayArrayEn[now.getDay()] 
        hour.innerHTML = now.getHours()<10?"0"+now.getHours():now.getHours()
        minute.innerHTML = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
        second.innerHTML = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()
    },1000)

    let clock = document.querySelector(".clock")
    if(getDayOrNight()=="낮"){
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("day")
        //day클래스와 night클래스를 삭제
        //이후 day클래스가 추가 
    }else{
        clock.classList.remove("day")
        clock.classList.remove("night")
        clock.classList.add("night")
        //day클래스와 night클래스를 삭제
        //이후 night클래스가 추가 
    }
}

