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
    if (str.length > 8) {
        return str.slice(0, 8) + '...'
    }
    else {
        return str
    }
    
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

function reverseString_02(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp
    }
    console.log(arr)
}
console.log(reverseString_02("Hello World"))


// Bài 6
function checkSymmetricString(str) {
    let strRmSpace = str.toLowerCase().split('').join('')
    let newArr = strRmSpace.split("")
    for (i = 0; i < Math.ceil(newArr.length / 2); i++) {
        if (newArr[i] != newArr[newArr.length - i - 1]) {
            return false;
        }
    }
    return true;
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

function checkVowel_01(str) {
    let vowels = 'aeiou'
    let arr = str.split('')
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (vowels.indexOf(arr[i] != -1)) {
            count += 1
        }
    }
}
console.log(checkVowel_01("hello hien"))

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

function checkEnd_01(str, target) {
    return str.endWith(target)
}
console.log(checkEnd_01("hello", "lo"))

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

function getLetterNoRepeat_01(str) {
    let removeSpace = str.split(' ').join('')
    let arr = removeSpace.split('')
    let uniqueLetter = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            uniqueLetter.push(arr[i])
        }
    }
    return uniqueLetter.join(',')
}
console.log(getLetterNoRepeat_01("abce abcdf"))
