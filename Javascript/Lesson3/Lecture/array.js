let numbers = [2, 4, 6, 8]
console.log(numbers);

let emptyArr = []
console.log(emptyArr)

// Lấy giá tri trong mảng thông qua chỉ số
console.log(numbers.length)
console.log(numbers[2])
console.log(numbers[numbers.length - 1]) // chỉ số bắt đầu từ 0 và kết thúc tại length - 1

// Set lại giá trị thông chỉ số
numbers[2] = 7;
console.log(numbers)

// numbers[7] = 10;
// console.log(numbers)

// console.log(numbers[4])

// Phương thức thêm, xóa các phần tử trong mảng

// Các vị trí đặc biệt như đầu và cuối
// Thêm ở cuối mảng: push
numbers.push(10)
console.log(numbers)

// Xóa ở cuối mảng: pop()
numbers.pop()
console.log(numbers)

// Thêm ở đầu mảng: unshift
numbers.unshift(0)
console.log(numbers)

// Xóa ở đầu mảng: shift
numbers.shift()
console.log(numbers)

// splice: vừa thêm vừa xóa
// chỉ xóa
numbers.splice(1, 2)
console.log(numbers)

// chỉ thêm
numbers.splice(1, 0, 4, 7)
console.log(numbers)

// vừa thêm vừa xóa
numbers.splice(1, 1, 5, 6)
console.log(numbers)

// Nối mảng
numbers = numbers.concat([9, 10], [11, 12, 13])
console.log(numbers)

// Đảo ngược mảng
numbers.reverse()
console.log(numbers)

// sắp xếp mảng
numbers.sort(function (a, b) {
    return b - a
})
console.log(numbers)

// Lặp mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// tính tổng
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(`Tổng mảng là: ${sum}`)

// arr = [12, 10, 8, 6, 2]
let arr = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        arr.push(numbers[i])
    }
}
console.log(arr)

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
console.log(arr1 == arr2)

let arr3 = [1, 3, 2, 4]
let arr4 = arr3.sort(function (a, b) {
    return a - b
})
console.log (arr3 == arr4)
