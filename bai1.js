let N = prompt("Mời bạn nhập vào số nguyên từ 1 đến n");

if (!isNaN(N) && N > 0) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
        console.log(`Tổng các số từ 1 đến ${N} là: ${sum}`);
    }
} else {
    console.log("không phải là số nguyên");
}

