//
let a = true
let b = false
let c = !a;
let d = !b;

console.log(a, b, c, d)

// Xác định giá trị của biến hay biểu thức
let number = 10
console.log(Boolean(number))
console.log(Boolean(6 > 10))

// Kiểm tra falsy value
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(``))
console.log(Boolean(null))
console.log(Boolean(undefined))


// Toán tử &&, toán tử //
// Toán tử &&
console.log(`Toán tử &&`)
console.log(Boolean(true && true));
console.log(Boolean(true && false));
console.log(Boolean(false && true));
console.log(Boolean(false && false));

console.log(`Toán tử &&`)
console.log(Boolean(true || true));
console.log(Boolean(true || false));
console.log(Boolean(false || true));
console.log(Boolean(false || false));

// Câu lệnh if
console.log(`Câu lệnh if`);

let hour = 14;
if (hour < 12) {
    console.log(`Good morning!`);
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
} else if (hour >= 8 && hour < 22) {
    console.log('Good evening')
} else {
    console.log(`Good evening`)
}

// Switch-case
let money = 30000;
switch (money) {
    case 12000:
        console.log(`Cà phê sữa`);
        break;
    case 10000:
        console.log(`Cà phê đá`);
        break;
    case 8000:
        console.log(`String dâu`);
        break;
    case 2000:
        console.log(`Trà đá`);
        break;
    default:
        console.log(`Không có đồ uống nào phù hợp`);
        break;
}

let num = 10
switch (num) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        console.log(`số chẵn`);
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log(`số lẻ`);
        break;
    default:
        console.log(`số không hợp lệ`);
        break;
}

// Loop
// For
// Ví du: thực hiện công việc thức dậy trong vòng 30 ngày
for (let i = 0; i <= 30; i = i + 1) { // có thê dùng i++ thay cho i = i + 1
    // break
    // if (i == 20) {
    //    console.log(`Ngày ${i} bị ốm. Không thể tiếp tục`)
    //    break
    // }

    // continue - bỏ qua vòng lặp theo điều kiện
    if (i % 2 == 1){
        continue;
    }
    console.log(`Ngày ${i} thức dậy lúc 7h`);
}

// Tính tổng tiết kiệm
// Mình sẽ tiến hành tiết kiệm tiền trong vòng 10 ngày, mỗi ngày mình sẽ tiết kiệm 100000
// 10 ngày => 1.000.000

let totalMoney = 0 // Khi bất đầu thì số tiền tiết kiệm = 0
for (let i = 1; i <= 10; i++) {
    // tổng số tiền tiết kiệm hiện tại = tổng số tiền tiết kiệm trước đó + 100.000
    if (i >= 5) {
        totalMoney = totalMoney + 200000
    } else {
        totalMoney = totalMoney + 100000
    }
}
console.log(totalMoney);


// Excercise
function markCheck(mark) {
    if (mark >= 85) {
        console.log(`A`)
    } else if (70 <= mark < 85) {
        console.log(`B`)
    } else if (40 <= mark < 70) {
        console.log(`C`)
    }
    else {
        console.log(`D`)
    }
}
markCheck(49)

function compareLarger(a, b) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
compareLarger(4, 9)

function checknum(a) {
    if (a < 0) {
        console.log('Số âm')
    }
    else if (a = 0) {
        console.log(`số 0`)
    }
    else {
        console.log(`số dương`)
    }
}
checknum(-13)

function checknum2(a) {
    if (a % 2 == 0) {
        console.log('Số chẵn')
    }
    else {
        console.log(`số lẻ`)
    }
}
checknum2(13)

function checknum3(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log('chia đc')
    }
    else {
        console.log(`không chia đc`)
    }
}
checknum3(21)

// = là gán giá trị, == mới là so sánh giá trị, gán giá trị lúc nào cũng là true
function checknum4(a, b, c) {
    if (c == a + b) {
        console.log(`bằng`)
    }
    else {
        console.log(`không bằng`)
    }
}
checknum4(1, 5, 10)

// Excercise (Switch-case)
function checkMonth(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log(`Mùa xuân`)
            break
        case 4:
        case 5:
        case 6:
            console.log(`Mùa hạ`)
            break
        case 7:
        case 8:
        case 9:
            console.log(`Mùa thu`)
            break
        case 10:
        case 11:
        case 12:
            console.log(`Mùa đông`)
            break
    }
}
checkMonth(7)

