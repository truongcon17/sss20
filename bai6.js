let number = +(prompt("Nhập vào một số nguyên:"));

if (!Number.isInteger(number) || number <= 1) {
    alert("Dữ liệu nhập vào không hợp lệ. Số nguyên tố phải lớn hơn 1.");
} else {
    let laSoNguyenTo = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            laSoNguyenTo = false;
            break;
        }
    }
    if (laSoNguyenTo) {
        alert(number + " là số nguyên tố.");
    } else {
        alert(number + " không phải là số nguyên tố.");
    }
}