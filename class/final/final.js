const checkValidation = function(){

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email&&pw1&&pw2&&name) {
        // 모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        // 하나라도 비어있을 때
        document.getElementById("submit").disabled = true
    }

}

const changeFocus1 = () => {

    let phone1 = document.getElementById("n1").value
    if(phone1.length === 3) {
        document.getElementById("n2").focus()
    }
}

const changeFocus2 = () => {

    let phone1 = document.getElementById("n2").value
    if(phone1.length === 4) {
        document.getElementById("n3").focus()
    }
}

const authnum = () => {

    const phone1 = document.getElementById("n1").value
    const phone2 = document.getElementById("n2").value
    const phone3 = document.getElementById("n3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("authbutton").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("authbutton").removeAttribute("disabled")
    }
}

let isStarted = false;

let auth = () => {

    if(isStarted === false){
        // 타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled = false
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
        
        let time = 180
        let timer

        timer = setInterval(function(){
        
            if(time>=0) {
                let min = Math.floor( time / 60 )
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)

    }

}

let done = function() {
    alert("인증이 완료되었습니다.")
}