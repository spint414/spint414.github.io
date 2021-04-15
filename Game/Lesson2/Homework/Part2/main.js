let up = document.querySelector(".nextBtn")
let down = document.querySelector(".prevBtn")
let counter = document.getElementById("counter")

let number = 0

up.addEventListener('click', function () {
    number++
    update()
})

down.addEventListener('click', function () {
    number--
    update()
})

function update() {
    counter.innerText = number
    if (number > 0){
    document.getElementById("counter").style.color = "blue"
    }
    else if (number == 0) {
    document.getElementById("counter").style.color = "#333333"
    }
    else {
    document.getElementById("counter").style.color = "red"
    }
}
