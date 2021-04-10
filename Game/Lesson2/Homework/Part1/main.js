// Bài 1 + 4
function changeWrd() {
    let txt = document.querySelector('p').innerText
    txt = txt.replace(/!/g, "🤔")
    txt = txt.replace(/\?/g, "😲")
    let arr = txt.split(' ')
    let highlightwrd = ""
    let result = ""
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length >= 8) {
            highlightwrd = "<span class='highlight'>" + arr[i] + "</span>"
        }
        else {
            highlightwrd = arr[i]
        }
        result = result + " " + highlightwrd + " "
    }
    return result
}
document.querySelector('p').innerHTML = changeWrd()

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
