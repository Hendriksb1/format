/* prevents rounding
so for num = 2.59, dec = 1
calcDec = 10
num * calcDec = 25,9
Math.trunc(25,9) = 25
25/10 = 2.5
*/
export function truncateToDecimals(num, dec) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
}


