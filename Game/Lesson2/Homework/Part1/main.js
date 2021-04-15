// Bài 1
function highlight() {
    let txt = document.querySelector('p').innerText
    let arr = txt.split(' ')
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length >= 8) {
            arr[i] = `<span class='highlight'>${arr[i]}</span>`
        }
    }
    return arr.join(" ")
}
document.querySelector('p').innerHTML = highlight()

// Bài 2
let link = document.createElement('a')
let linkText = document.createTextNode("Facebook")
link.appendChild(linkText)
link.href = "http://facebook.com"
document.body.appendChild(link)

// Bài 3
function wordCount() {
    let txt = document.querySelector('p').innerText
    let arr = txt.split(' ')
    return arr.length
}
let wordCountDiv = document.createElement("div")
wordCountDiv.innerText = "Tổng số lượng từ: " + wordCount()
document.body.appendChild(wordCountDiv)

// Bài 4
document.querySelector('p').innerHTML = document.querySelector('p').innerHTML.replace(/!/g, "😲")
document.querySelector('p').innerHTML = document.querySelector('p').innerHTML.replace(/\?/g, "🤔")

// document.querySelector('p').innerHTML = document.querySelector('p').innerHTML.split("").map => {
//     if (char == "?") {
//         char = "😲"
//     } else if (char == "!") {
//         char = "🤔"
//     }
//     return char
// }.join("")