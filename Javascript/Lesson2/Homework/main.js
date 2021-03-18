// Bài 1: Viết function nhập vào số month và year bất kỳ. Trả về số ngày của tháng đó (sử dụng switch/case)
function checkDays(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31)
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30)
            break;
        case 2:
            if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            console.log(29)
        else
            console.log(28);
        break;
        default:    
            console.log('ngày tháng không hợp lệ')
    }
}
checkDays(2, 1993)

// Bài 2: Viết function sử dụng vòng lặp từ 1->100

function numLoop() {
    for (let i = 1; i <= 100; i++)
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        } else if  (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
}
numLoop()

// Bài 3: Viết function tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function volumeSphere(radius) {
    let v = 4 / 3 * Math.PI * Math.pow(radius, 3)
    return v
}
console.log(volumeSphere(5))

// Bài 4: Viết function truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. 

function integerGapSum(a, b) {
    if a < b {
    let n = (b - a - 1)
    let sum = n * (a + b) / 2
        return sum
    }
    else if b < a{
    let n = (a - b - 1)
    let sum = n * (a + b) / 2
        return sum
    }
}

console.log(integerGapSum(4, 10))

// Bài 5: Viết function truyền vào 1 số. Kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 

function isprime(a) {
    if a > 0 {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return false
            }
        }
        return true
    }
    else {
        return console.log("đây không phải là số nguyên dương")
    }
}
console.log(isprime(13)) 

// Bài 6: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function primeSum(num) {
    let answer = 0;
    for (let i = 2; i <= num; i++) {
        if (isprime(i)) {
            answer += i;
        }
    }
    return answer
}

console.log(primeSum(11))

// Bài 7: Viết function truyền vào 1 số nguyên dương bất kỳ. Tính tổng tất cả các ước số của số đó.

function divisor(num) {
    let answer = 0;
    for (let i = 1; i <= num; i++)
        if (num % i == 0) {
            answer += i;
        }
    return answer
}

console.log(divisor(8))
