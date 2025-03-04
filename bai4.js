let str = prompt("Mời bạn nhập vào 1 chuỗi :");
let search = prompt("Mời bạn nhập vào kí tự tìm kiếm :");
let flag = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == search) {
        flag = 1;
    }
}
flag == 1 ? console.log("ton tai") : console.log("khong ton tai");