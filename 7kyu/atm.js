function solve(n) {
    let b500 = Math.floor(n / 500);
    let b200 = Math.floor((n - (b500 * 500)) / 200);
    let b100 = Math.floor((n - (b500 * 500) - (b200 * 200)) / 100);
    let b50 = Math.floor((n - (b500 * 500) - (b200 * 200) - (b100 * 100)) / 50);
    let b20 = Math.floor((n - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50)) / 20);
    let b10 = Math.floor((n - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20)) / 10);

    if  ((n - ((b500 * 500) + (b200 * 200) + (b100 * 100) + (b50 * 50) + (b20 * 20) + (b10 * 10))) == 0) {
        return b500 + b200 + b100 + b50 + b20 + b10;
    }

    return -1;
}