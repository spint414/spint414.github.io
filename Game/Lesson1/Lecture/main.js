// Truy cập thông qua ID
const heading = document.getElementById('heading')
console.log(heading)

// Truy cập thông qua Name, luôn trả về danh sách
const paras = document.getElementsByTagName('p') 
console.log(paras)
console.log(paras.length)
console.log(paras[0])

// Truy cập thông qua tên Class
const parasClassName = document.getElementsByClassName('para');
console.log(parasClassName)

// Truy cập thông qua CSS selector
// Lấy thẻ para 2
const para2 = document.querySelector('.para')
console.log(para2)

// Lấy thẻ para 3
const para3 = document.querySelector('.para + p')
console.log(para3)

const para3_01 = document.querySelector('.para ~ p')
console.log(para3_01)

const para3_02 = document.querySelector('p:nth-child(4)')
console.log(para3_02)

// Lấy ul
const ul = document.querySelector('bodu > ul')
console.log(ul)

// Truy cập cục bộ
const box = document.querySelector('.box')
const ul_box = box.querySelector('ul')
console.log(ul_box)

// Lấy tất cả thẻ p
const parasSelectorAll = document.querySelectorAll('p')
console.log(parasSelectorAll)

// Mối quan hệ giữa các phần tử
// Lấy cha
const boxParent = box.parentNode
console.log(boxParent)

// Lấy con
const boxChild = box.childNodes
console.log(boxChild)
console.log(box.children)

// Anh em đứng trước
console.log(box.previousElementSibling)

// Anh em đứng sau
console.log(box.nextElementSibling)
