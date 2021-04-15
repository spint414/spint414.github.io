// Lấy ra nội dung
const heading = document.getElementById('heading')
console.log(heading.innerHTML)
console.log(heading.innerText)
console.log(heading.textContent)

const box = document.querySelector('.box')
console.log(box.innerHTML)
console.log(box.innerText)
console.log(box.textContent)

// Thay đổi nội dung
heading.innerHTML = '<span style="color: red">Xin chào</span> các bạn'

heading.innerText = 'Xin chào'

heading.textContent = 'Hello'

const li3 = document.querySelector('body > ul > li:nth-child(3)')
li3.textContent = 'Hello'

// Tạo phần tử
let para = document.createElement('p') // <p></p>
para.innerText = 'New para'
console.log(para)

// Thêm vào đầu phần tử cha (body thì phải đi với document)
// document.body.prepend(para)

// Thêm vào đầu cuối tử cha
// document.body.appendChild(para)

// Thêm thẻ p trước thẻ box
document.body.insertBefore(para, box)

// Tạo thẻ li có nội dung là "New Li", thêm vào vị trí giữa li 3 và 4
let Newli = document.createElement('li')
Newli.innerText = 'New li'
const li4 = document.querySelector('.box > ul > li:nth-child(4)')
const boxul = document.querySelector('.box > ul')
boxul.insertBefore(Newli, li4)

// Xóa phần tử
// Xóa thẻ para 2
const para2 = document.querySelector('.para')
document.body.removeChild(para2)

// Xóa thẻ li đầu tiên ở ul thứ hai
const ul2 = document.querySelector('body > ul')
const theli11 = document.querySelector('body > ul > li:nth-child(1)')
ul2.removeChild(theli11)

// Tạo thẻ input thay thế cho para3
let button = document.createElement('button')
button.innerText = 'Click'

let para3 = document.querySelector('body > p:nth-child(3)')
console.log(para3)

document.body.replaceChild(button, para3)

// Tạo thẻ input
// Thay thế cho thẻ 'new para'
let input = document.createElement('input')
document.body.replaceChild(input, para)

// Sao chép biến
// node.cloneNode(deep)
// node: phần tử được clone
// deep: không bắt buộc
// true sao chép nodem attribute và thành phần con của nó
// false chỉ sao chép node và attribute (mặc định)

// sao chép li 2.2 rồi thêm vào cuối cùng của ul2
const li = document.querySelector('.li')
let li2_copy = li.cloneNode(true)
ul2.appendChild(li2_copy)

// Thay đổi CSS
// element.style.property = value
// property có 2 từ trở lên cần viết theo dạng camelCase
heading.style.color = 'red'
heading.style.backgroundColor = 'black'

// viết function random màu
// khi vào trang web hiển thị màu background của body tương ứng với màu đã random ra từ function

function randomHexCode() {
    let letters = '0123456789ABCDEF';
    let result = '#';
    for (var i = 0; i < 6; i++) {
      result += letters[Math.floor(Math.random() * 16)];
    }
    return result;
}
console.log(randomHexCode())
document.body.style.backgroundColor = randomHexCode()
