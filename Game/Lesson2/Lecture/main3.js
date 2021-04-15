// document.addEventListener('mousedown', function () {
//     console.log('mousedown')
// })
// document.addEventListener('mouseup', function () {
//     console.log('mouseup')
// })
// document.addEventListener('mousemove', function () {
//     console.log('mousemove')
// })
// document.addEventListener('click', function () {
//     console.log('click')
// })

// Lấy các thông tin như là tọa độ của chuột
// client: toàn màn hình (bao gồm task bar)
// screen: trang web (không tính task bar)
// offset: event mà chuột tương tác
// document.addEventListener('click', function (event) {
//      console.log(event)
// })

let left = 0;
let interval;
const Max = 500;

let container = document.querySelector('.container')
container.addEventListener('click', function (event) {

    // Xóa tất cả hình tròn
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        container.removeChild(boxes[i]);
    }

    // Click tạo ra hình tròn
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.top = `${event.offsetY - 50}px`;
    box.style.left = `${event.offsetX - 50}px`;

    container.appendChild(box);

    // Lưu lại vị trí theo chiều ngang
    left = event.offsetX - 50
});

document.querySelector('#btn-move').addEventListener('click', function () {
    let box = document.querySelector('.box');

    if (!box) {
        alert('Không có hình tròn nào');
        return;
    }

    // 1. Lấy ra vị trí hiện tại của hình tròn
    let limit = left + Max;
    // 2. Cập nhật vị trí sử dụng setInterval
    interval = setInterval(function () {
        left = left + 2
        box.style.left = `${left}px`
        if (left > limit) {
            clearInterval(interval);
        }
    }, 1000/60)
});
