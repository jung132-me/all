window.onload=function(){
    let tabContents = [
        `<h3>홈</h3>
        <p>
            사이트의 메인 페이지로, 가장 중요한 정보를 빠르게 전달하는 공간입니다. 방문자가 웹사이트에 처음 방문했을 때 시선을 끌 수 있는 이미지와 슬로건을 배치합니다. 최신 소식, 이벤트, 및 주요 서비스에 대한 간단한 안내도 추가하여 첫인상을 형성합니다. 사용자 친화적인 인터페이스와 함께 간결한 디자인을 적용합니다.
        </p>`,
        `<h3>서비스</h3>
        <p>
            제공하는 서비스의 종류와 내용을 구체적으로 설명하는 페이지입니다.
        </p>
        <ul class="serviceList">
            <li>basic package</li>
            <li>premium package</li>
            <li>elite package</li>
        </ul>`,
        `고객들이 궁금한 사항이나 맞춤형 문의를 할 수 있는 공간입니다. 이메일 양식, 전화번호, 소셜 미디어 링크 등을 통해 접근성을 높입니다. 상담 가능한 시간을 명시하고, 자주 묻는 질문을 FAQ 형식으로 정리해두면 좋습니다. 빠른 답변을 위한 채팅 옵션을 추가하여 고객 응대 속도를 높입니다.`
    ]

    let tabUl = document.querySelector(".tabTitle")
    let tabTitle = tabUl.children
    let tabContentsDiv = document.querySelector(".tabContents")

    for (let i=0; i<tabTitle.length; i++){
        tabTitle[i].addEventListener("click",function(){
            for(let j=0; j<tabTitle.length;j++){
                tabTitle[j].classList.remove("on")
            }
            tabTitle[i].classList.add("on")
            tabContentsDiv.innerHTML = tabContents[i]
        })
    }
    // tabTitle[0].addEventListener("click",function(){
    //     tabTitle[0].classList.remove("on")
    //     tabTitle[1].classList.remove("on")
    //     tabTitle[2].classList.remove("on")
    //     tabTitle[0].classList.add("on")
    //     tabContentsDiv.innerHTML = tabContents[0]
    // })
    // tabTitle[1].addEventListener("click",function(){
    //     tabContentsDiv.innerHTML = tabContents[1]
    //     tabTitle[0].classList.remove("on")
    //     tabTitle[1].classList.remove("on")
    //     tabTitle[2].classList.remove("on")
    //     tabTitle[1].classList.add("on")
    // })
    // tabTitle[2].addEventListener("click",function(){
    //     tabContentsDiv.innerHTML = tabContents[2]
    //     tabTitle[0].classList.remove("on")
    //     tabTitle[1].classList.remove("on")
    //     tabTitle[2].classList.remove("on")
    //     tabTitle[2].classList.add("on")
    // })
}