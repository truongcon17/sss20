let N = prompt("Nhập vào một số nguyên: ");
if (!Number.isInteger(+N)) {
    console.log("Dữ liệu nhập vào không hợp lệ");
} else {

    let soNguyen = N.trim();
    let soDaoNguoc = N.split('').reverse().join('');
    if (soNguyen === soDaoNguoc) {
        console.log(`${soNguyen} là số đối xứng`);
    } else {
        console.log(`${soNguyen} không phải là số đối xứng`);
    }
}