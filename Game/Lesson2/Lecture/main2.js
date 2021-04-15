// Cách 1: HTML attribute
function sayHello() {
    console.log('Hello')
}

// Cách 2: DOM property
let btn_01 = document.querySelector('#btn_01')
// btn_01.onclick = function () {
//     console.log('Hello_01')
// }

function sayHello_01() {
    console.log('Hello_01')
}
btn_01.onclick = sayHello_01

// Cách 3: addEventListener
let btn_02 = document.querySelector('#btn_02')
btn_02.addEventListener('click', function () {
    console.log('Hello_02')
})

// nút ẩn hiện đoạn văn
let hide_show = document.querySelector('#hide-show')
let para = document.getElementById('text-sample')

// function hideshow() {
//     if (para.style.display === "none") {
//       hide_show.innerText = "Ẩn"  
//       para.style.display = "block";
//     } else {
//       hide_show.innerText = "Hiện"  
//       para.style.display = "none";
//     }
// }
// hide_show.onclick = hideshow

hide_show.addEventListener('click', function () {
    para.classList.toggle('hide');
    if (para.classList.contains('hide')) {
        hide_show.innerText = 'Hiện'
    } else {
        hide_show.innerText = 'Ẩn'
    }
})
