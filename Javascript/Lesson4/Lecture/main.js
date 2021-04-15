// slice: Cắt mảng
let arr = [1, 2, 3, 4, 5, 6]

// Truyền đủ tham số
console.log(arr.slice(1, 5))

// Truyền 1 tham số: lấy từ vị trí bắt đầu => cuối mảng
console.log(arr.slice(1))

// Không truyền tham số
console.log(arr.slice())

// Truyền tham số âm
console.log(arr.slice(-5, -1))
console.log(arr.slice(-5))

// indexOf: kiểm tra xem 1 giá trị có nằm trong mảng hay khong
// nếu có => trả  về vị trí đầu tiên của phần tử
// nếu không => trả về -1
console.log(arr.indexOf(4))
console.log(arr.indexOf(7))
console.log(arr.indexOf(1))

// lastindexOf: trả về vị trí cuối cùng của phần tử
console.log(arr.lastIndexOf(1))

//  join() : convert arr => string
console.log(arr.join())
console.log(arr.join(' '))

// excercise
// B1
function checkElementExist(arr, num) {
    if (arr.indexOf(num) == -1) {
        return false
    }
    else {
        return true
    }
}

console.log(checkElementExist([1, 2, 3, 4], 4))

// B2
function max2Numbers(arr){
    let first=0,second=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if(arr[i]>second && arr[i]<first){
            second = arr[i];
       } 
    }
    return second;
}

console.log(max2Numbers([1, 5, 10, 4, 9, 10, 10]))

// B3
function randomElement(arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
}

console.log(randomElement([1, 8, 209, 37, 2]))

// B4
function findMaxLengthElement(max) {
    let lgth = 0, longest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }
        return longest
    }
}

console.log(findMaxLengthElement(["aaaa", "aad", "asd", "aaaa"]))