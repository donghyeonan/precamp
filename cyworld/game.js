const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastword = word[word.length -1]
    let firstword = myword[0]

    if (lastword === firstword) {
        // 정답일 때
        document.getElementById("result").innerText = "정답입니다 !"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value =""
    } else {
        // 오답일 때
        document.getElementById("result").innerText = "땡!"
    }
}
