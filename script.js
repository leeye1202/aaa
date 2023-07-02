window.onload = function () {
    const menu = document.querySelectorAll('a')
    console.log(menu)
    let num = 0
    setInterval(function () {
        for (let j of menu) { j.classList.remove('ani') }
        menu[num].classList.add('ani')
        num++
        if (num >= 2) { num = 0 }
        console.log(num)
    }, 1000)

    const content_txt = "웹 퍼블리셔 이예지 입니다 :) "
    const hello = document.querySelector(".hello")
    let index = 0

    function typing() {
        hello.textContent += content_txt[index++]
        if (index > content_txt.length) {
            hello.textContent = ""
            index = 0
        }
    }

    setInterval(typing, 180)
}
