// Bài 1
function checkStringExist(str1, str2) {
    if (str1.includes(str2)) {
        return true
    }
    else {
        return false
    } 
}
console.log(checkStringExist('i love you', 'love'))

// Bài 2
function shortenString(str) {
    return str.slice(0, 8) + '...'
}
console.log(shortenString("Xin chao cac ban"))

// Bài 3
function capitalizeString(str) {
    let cap = str.toLowerCase().split(' ')
    let result = []
    for (let i = 0; i < cap.length; i++) {
        let char = cap[i].split('')
        char[0] = char[0].toUpperCase()
        let wrd = char.join("")
        result.push(wrd)
    }
    return result.join(" ")
}
console.log(capitalizeString("chAo mUng dEn voi Techmaster"))

// Bài 4
function repeatString(str, n) {
    if (n > 1 && Number.isInteger(n)) {
        let result = ''
        for (let i = 0; i < 5; i++) {
            result += str + '-';
        }
        return result.slice(0, result.length - 1);
    }
    else {
        return "invalid input"
    }
}
console.log(repeatString("a", 5))

// Bài 5
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"))

// Bài 6
function checkSymmetricString(str) {
    let normal = str.toLowerCase().split('').join('')
    let reverse = str.toLowerCase().split('').reverse().join('')
    if (normal === reverse) {
        return true
    }
    else {
        return false
    }
}
console.log(checkSymmetricString('Race car'))
console.log(checkSymmetricString('hello world'))

// Bài 7
function checkVowel(str) {
    let array = str.split('')
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "a" || array[i] == "o" || array[i] == "e" || array[i] == "u" || array[i] == "i") {
            count += 1
        }
    }
    return count
}
console.log(checkVowel("hello hien"))

// Bài 8
function checkEnd(str, target){
    let str1 = str.split('').reverse()
    let target1 = target.split('').reverse()
    for (let i = 0; i < target1.length ; i++) {
      if (target1[i] !== str1[i]) {
        return false;
      }
    }
    return true;
}
console.log(checkEnd("hello", "lo"))

// Bài 9
function getFirstLetter(str) {
    let array = str.split(" ")
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i].charAt(0))
    }
    return result.join(" ")
}
console.log(getFirstLetter("xin chào các bạn"))

// Bài 10
function sortLetters(str) {
    return str.split('').sort().join('')
}
console.log(sortLetters("HellO WorLd"))

// Bài 11
function getLetterNoRepeat(str) {
  let unique = '';
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique.split(" ").join("");
}
console.log(getLetterNoRepeat("abce abcdf"))