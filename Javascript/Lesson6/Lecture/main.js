// Object
let emptyUser = {}

let user = {
    name: "Nguyễn Văn A",
    email: 'abc@gmail.com',
    year: 1995,
    isStatus: true,

    speak: function () {
        console.log('Xin chào ' + name)
    },

    getAge: function () {
        return 2021 - this.year // this = đối tượng thực thi function, không có sẽ tự động là Windows
    }
}
console.log(this)

// Lấy ra giá trị
// Cách 1
console.log(user.name)
console.log(user.email)
console.log(user.age)
user.speak('Hưng')
console.log(user.getAge())

// Cách 2
console.log(user['name'])

// Thay đổi giá trị
user.name = 'Trần Văn B'
console.log(user)

// Thêm key-value
user.weight = 60
console.log(user)

// Xóa key
delete user.weight
console.log(user);

// Function
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4))

// Cách 2
let sum_01 = function (a, b) {
    return a + b;
};
console.log(sum_01(3, 4))

// Cách 3
let sum_02 = (a, b) => a + b // Dấu => thay cho function, trong trường hợp code chỉ có 1 dòng thì có thể bỏ [] và return
console.log(sum_02(3, 4))

// map, filter: duyệt qua các phần tử của mảng, thao tác và trả lại mảng mới dài bằng mảng cũ và không ảnh hưởng đến các phần tử của mảng
let numbers = [1, 2, 3, 4]
let newNumbers = numbers.map((ele, index) => ele * 2)
console.log(newNumbers)

// filter: trả lại tất cả giá trị
let filterNumber = numbers.filter(value => value > 2)
console.log(filterNumber)

// find: chỉ trả lại giá trị đầu tiên tìm thấy
let findNumber = numbers.find((value) => value > 2) 
console.log(findNumber)

// findIndex: trả lại chỉ số
let findIndexNumber = numbers.findIndex((value) => value > 2)
console.log(findIndexNumber)

// some: 1 cái đúng trả về true, tất cả trả về false
console.log(numbers.some(value => value > 3))
console.log(numbers.some(value => value > 4))

// every
console.log(numbers.every(value => value > 0))
console.log(numbers.every(value => value > 2))

// Excersice
let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// Bài 1
function averageGrade(array) {
    let totalSum = 0
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i].grade
    }
    return totalSum / array.length
}
console.log(averageGrade(grades))

// Bài 2
function averageGradeMale(array) {
    let totalSum = 0
    let MaleCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'M') {
            totalSum += array[i].grade
            MaleCount += 1
        }
    }
    return totalSum / MaleCount
}
console.log(averageGradeMale(grades))

// Bài 3
function averageGradeFemale(array) {
    let totalSum = 0
    let FemaleCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'F') {
            totalSum += array[i].grade
            FemaleCount += 1
        }
    }
    return totalSum / FemaleCount
}
console.log(averageGradeFemale(grades))

// Bài 4
function maxGradeMale(array) {
    let gradeArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'M') {
            gradeArr.push(array[i].grade)
        }
    }
      return Math.max(...gradeArr)
}
console.log(maxGradeMale(grades))

// Bài 5
function maxGradeFemale(array) {
    let gradeArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'F') {
            gradeArr.push(array[i].grade)
        }
    }
    return Math.max(...gradeArr)
}
console.log(maxGradeFemale(grades))

// Bài 6
function minGradeMale(array) {
    let gradeArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'M') {
            gradeArr.push(array[i].grade)
        }
    }
      return Math.min(...gradeArr)
}
console.log(minGradeMale(grades))

// Bài 7
function maxGradeFemale(array) {
    let gradeArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].sex == 'F') {
            gradeArr.push(array[i].grade)
        }
    }
    return Math.max(...gradeArr)
}
console.log(maxGradeFemale(grades))
