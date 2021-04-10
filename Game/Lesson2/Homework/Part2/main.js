let up = document.querySelector("body > div > div > button.btn.counterBtn.nextBtn")
let down = document.querySelector("body > div > div > button.btn.counterBtn.prevBtn")
let value = parseInt(document.getElementById("counter").innerText)

up.addEventListener('click', function () {
    value++
     if (value > 0){
        document.getElementById("counter").style.color = "blue"
    }
     else if (value === 0) {
        document.getElementById("counter").style.color = "#333333"
    }
    document.getElementById("counter").innerText = value
})

down.addEventListener('click', function () {
    value--
    if (value < 0) {
        document.getElementById("counter").style.color = "red"
    }
    else if (value === 0) {
        document.getElementById("counter").style.color = "#333333"
    }
    document.getElementById("counter").innerText = value
})

