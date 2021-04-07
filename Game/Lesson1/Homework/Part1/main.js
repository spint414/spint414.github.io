// Bài 1
const para1 = document.getElementById('text')
para1.style.color = '#777'
para1.style.fontSize = "2rem"
para1.innerText = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Bài 2
let liBlue = function () {
    let list = document.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++)
        list[i].style.color = 'blue'
}
liBlue()

