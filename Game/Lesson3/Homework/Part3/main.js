// selector
let list = document.getElementById('list')

// 1
let li8 = document.createElement('li')
li8.innerText = 'Item 8'
let li9 = document.createElement('li')
li9.innerText = 'Item 9'
let li10 = document.createElement('li')
li10.innerText = 'Item 10'
list.appendChild(li8)
list.appendChild(li9)
list.appendChild(li10)

// 2
let li1 = document.querySelector('body > ul > li:nth-child(1)')
li1.style.color = 'red'

//3
let li3 = document.querySelector('body > ul > li:nth-child(3)')
li3.style.backgroundColor = 'blue'

//4
let li4 = document.querySelector('body > ul > li:nth-child(4)')
list.removeChild(li4)

//5
let li5 = document.querySelector('body > ul > li:nth-child(4)')
let Newli4 = document.createElement('li')
Newli4.innerText = 'Đây là item 4 mới'
list.insertBefore(Newli4, li5)

//6
let button = document.createElement('button')
button.innerText = 'add'
let input = document.createElement('input')
document.body.appendChild(button)
document.body.appendChild(input)


button.addEventListener('click', function() {
    let liAdd = document.createElement("li")
    liAdd.innerText = input.value
    list.appendChild(liAdd)
})

//7
let remove = document.createElement('button')
remove.innerText = 'remove'
document.body.appendChild(remove)
remove.addEventListener('click', function () {
    let listList = document.querySelectorAll('ul > li')
    for (i = 0; i < listList.length; i++)
        if (i = listList.length - 1) {
            list.removeChild(listList[i])
        }
})

//8
let hide_show = document.createElement("button")
hide_show.innerText = "Hide"
document.body.prepend(hide_show)
hide_show.addEventListener('click', function () {
    if (list.style.display == "none") {
        hide_show.innerText = "Hide"
        list.style.display = "block"
    } else {
        hide_show.innerText = "Show"
        list.style.display = "none"
    }
})



