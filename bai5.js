let a = +(prompt("Nhập vào số a:"));
let b = +(prompt("Nhập vào số b:"));

if (!Number.isInteger(a) || !Number.isInteger(b) || b < 0) {
    alert("Dữ liệu nhập vào không hợp lệ.");
} else {
    let ketqua = 1;
    for (let i = 1; i <= b; i++) {
        ketqua *= a;
    }
    console.log(a + " lũy thừa " + b + " là: " + ketqua);
}