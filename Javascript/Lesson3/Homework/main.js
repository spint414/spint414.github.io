// Bài 1: Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
function isIncreasing(ab) {
  let check = true
  for (let i = 0; i < ab.length - 1; i++) {
      check = check && ab[i] < ab[i + 1]
    }
        if (check) {
            return true
        }
        else {
          return false
        } 
}

let ab = [3, 6, 10, 3, 4]
console.log(isIncreasing(ab))

// Bài 2: Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng giảm dần hay không
function isDecreasing(xy) {
  let check = true
  for (let i = 0; i < xy.length - 1; i++) {
      check = check && xy[i] > xy[i + 1]
    }
        if (check) {
            return true
        }
        else {
          return false
        } 
}

let xy = [9, 5, 4]
console.log(isDecreasing(xy))

// Bài 3: Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số chẵn tăng dần hay không

function isEvenIncreasing(ff) {
  let check = true
  for (let i = 0; i < ff.length - 1; i++) {
      check = check && ff[i] < ff[i + 1] && ff[i] % 2 === 0
    }
        if (check) {
            return true
        }
        else {
          return false
        } 
}

let ff = [2, 5, 10]
console.log(isEvenIncreasing(ff))

// Bài 4: Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng số lẻ giảm dần hay không

function isOddDecreasing(qw) {
  let check = true
  for (let i = 0; i < qw.length - 1; i++) {
      check = check && qw[i] > qw[i + 1] && Math.abs(i % 2) == 1
    }
        if (check) {
            return true
        }
        else {
          return false
        } 
}

let qw = [9, 5, 1]
console.log(isOddDecreasing(qw))

// Bài 5: Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng

function findMaxNumberArr(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max
}

let arr = [10, 26, 48, 39]
console.log(findMaxNumberArr(arr))

// Bài 6: Viết function truyền vào 1 mảng. Tìm số nhỏ nhất trong mảng

function findMinNumberArr(arr2) {
  let min = arr2[0]
  for (let i = 0; i < arr2.length; i++) {
    if (min > arr2[i]) {
      min = arr2[i];
    }
  }
  return min
}

let arr2 = [10, 26, 48, 9]
console.log(findMinNumberArr(arr2))

// Bài 7: Viết function truyền vào 1 mảng, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function modulo(b) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.splice(0, 0, b[i] % 2)
  }
  return result
}

let b = [4, 20, 5, 7]
console.log(modulo(b))

// Bài 8.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString(a) {
  if (typeof a === 'string' || a instanceof String) {
    a = a.repeat(10)
    return a
  }
  else return "not a string"
  }

console.log(repeatString("y"))

// Bài 9.Viết function truyền vào 1 chuỗi bất kỳ, có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang

function repeatStringWithDash(a) {
  if (typeof a === 'string' || a instanceof String) {
    a = a.repeat(10)
    let b = a.match(/.{1,1}/g).join('-');
    return b
  }
  else return "not a string"
}

console.log(repeatStringWithDash("y"))