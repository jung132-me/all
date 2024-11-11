function getDayWithSuffix(day) {
    if (day > 3 && day < 21) return day + 'th'; // Catch 11th-13th
    const suffix = ['th', 'st', 'nd', 'rd'][day % 10]|| 'th';
    //day를 포함한 대괄호가 배열보다 뒤에 위치한 까닭은 인덱스 괄호여서 뒤에 있음 > 예를 들어 day에 22라는 숫자가 들어올 경우 22 % 10 해서 나머지가 2가 나와 인덱스 번호가 2로 됨. 그래서 앞에 배열의 3번째([2]) 있는 것이 최종적으로 추출되는 것.  
    return day + suffix;
}