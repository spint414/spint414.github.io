// Bài 1
function similarity(arr1, arr2) {
    let result = []
    let bigger = []
    let smaller = []
    if (arr1.length > arr2.length) {
        bigger = arr1
        smaller = arr2
    }
    else if (arr2.length > arr1.length) {
        bigger = arr2
        smaller = arr1
    }
    for (i = 0; i < bigger.length; i++) {
        if (bigger.indexOf(smaller[i]) > -1) {
            result.push(smaller[i])
        }
    }
    return result
}
console.log(similarity(([1, 3, 5, 10]), ([2, 3, 7, 29, 5])))

function similarElement(arr1, arr2) {
    let similar = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            similar.push(arr1[i])
        }
    }
    return similar
}

// Bài 2
function removeDuplicates(arr) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        if (result.lastIndexOf(arr[i]) == -1) {
            result.push(arr[i])
        }
    }
    return result
}ss
console.log(removeDuplicates([1, 5, 5, 28, 3, 4, 9, 28, 3]))

function removeDuplicatesv2(arr) {
    let unique = []
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == unique.lastIndexOf(arr[i]))
            unique.push(arr[i]);
    }
    return unique
}

function removeDuplicatesv3(arr) {
    return [...new Set(arr)]
}

// Bài 3
function randomHexCode() {
    let letters = '0123456789ABCDEF';
    let result = '#';
    for (var i = 0; i < 6; i++) {
      result += letters[Math.floor(Math.random() * 16)];
    }
    return result;
}
console.log(randomHexCode())

// Bài 4
function randomRgbCode() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor
}
console.log(randomRgbCode())