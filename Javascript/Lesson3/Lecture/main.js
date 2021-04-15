// Vòng lặp for
console.log('== Vòng lặp For ==')
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Vòng lặp while
console.log('== Vòng lặp While ==')
let j = 1;
while (j <= 5) {
    // Nếu điều kiện đúng => thực hiện code trong while 
    console.log(j)
    j++;
}

//  Vòng lặp Do-While
console.log('== Vòng lặp Do While ==')
let k = 1
do {
    console.log(k);
    k++
} while (k <= 5);

// Toán tử 3 ngôi (condition ? (đúng) : (sai))
let num = 20
if (num >= 0) {
    console.log ('số dương')
} else {
    console.log('số âm')
}

num >= 0 ? console.log('số dương') : console.log('số âm')


