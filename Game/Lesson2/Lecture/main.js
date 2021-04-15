const para = document.querySelector('p')

console.log(para.classList)

// Add class
para.classList.add("text-big", "text-uppercase", "text-dark")

// Remove class
para.classList.remove("text-big", "text-uppercase", "text-dark")

// Kiểm tra 1 class có tồn tại trong phần tử hay không
// => true / false
console.log(para.classList.contains('text-red'))
console.log(para.classList.contains('text-uppercase'))

// Toggle
// setInterval(function () {
//     para.classList.toggle('text-big')
// }, 1500) // cứ 1.s thì thực hiện function 1 lần

// Đếm ngược thời gian
let time = 10;
let interval = setInterval(function () {
    time--;
    document.getElementById('time').innerText = `${time}s`

    if (time == 0) {
        // Dừng đếm ngược lại
        clearInterval(interval);
    }
    if (time < 5) {
        document.getElementById('time').style.color = 'red'
    }
}, 1000)

