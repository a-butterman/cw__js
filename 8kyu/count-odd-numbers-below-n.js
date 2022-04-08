function oddCount(n){
    // your code here
    let num = [];

    for (let i = 1; i < n; i++) {
        if ((i % 2) == 1) {
            num.push(i);
        }
    }
    return num.length;
}