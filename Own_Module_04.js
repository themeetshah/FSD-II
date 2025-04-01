// sq. of reverse & reverse of sq. is same from 1 to 100
// 12 -> 144 & 21 -> 441
// 12 nu rev 21 & 144 nu rev 441

const reverse = (a) => {
    var n = 0;
    while (a > 0) {
        n = (a % 10) + (n * 10);
        a = Math.floor(a / 10)
        // console.log(a, n)
    }
    return n;
}

module.exports.rev = reverse;