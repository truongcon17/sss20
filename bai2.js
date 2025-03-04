let input = prompt("Nhập một số nguyên N:");
let N = +(input);
if (isNaN(N) || N <= 0) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {
    console.log("Các số chia hết cho 5 trong khoảng từ 1 đến " + N + " là:");
    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}