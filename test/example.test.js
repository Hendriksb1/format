//const assert = require('assert');
import assert from 'node:assert/strict';

let format2 = function (val = 0, fractionDigits = 2, decimalSeperator = ",", readabilitySeperator = ".") {

    const defaultLocale = "de-DE";
    const alternateLocale = "en-US";

    let result = new Intl.NumberFormat('de-DE', { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits }).format(val)


    if (decimalSeperator === "." && readabilitySeperator === ",") {
        result = new Intl.NumberFormat('en-US', { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits }).format(val);
    }

    if (val < 0) {
         let num = new Number(val)
        result = num.toPrecision(fractionDigits)
        console.log(result)
    }

    return result
}

describe('simple Test', () => {
    it('2,56 should return true', () => {
        assert.equal("2,56", format2(2.555));
    });
    it('10.000,556 should return true', () => {
        assert.equal("10.000,556", format2(10000.5555, 3));
    });
    it('100.000,28 should return true', () => {
        assert.equal("100.000,28", format2(100000.28374, 2, ",", "."));
    });
    it('100,000.6 should return true', () => {
        assert.equal("100,000.6", format2(100000.55555, 1, ".", ","));
    });
    it('1,5550000000 should return true', () => {
        assert.equal("1,5550000000", format2(1.555, 10, ",", "."));
    });
    it('-1,5555 should return true', () => {
        assert.equal("-1,5555", format2(-1.55555, 4));
    });
    it('-1,5555 should return true', () => {
        assert.equal("-1,5555", format2("-1.55555", 4));
    });
    it('1,555 should return true', () => {
        assert.equal("1,555", format2(1.55555, 3, ",", ".", false));
    });
    it('1,56 should return true', () => {
        assert.equal("1,56", format2("1.5555", 2));
    });
});











// let format = function (val = 0, fractionDigits = 2, decimalSeperator = ",", readabilitySeperator = ".") {
//
//     const defaultLocale = "de-DE";
//     const alternateLocale = "en-US";
//
//
//     let result = val.toLocaleString(defaultLocale, { maximumFractionDigits: fractionDigits, minimumFractionDigits: fractionDigits })
//
//     if (decimalSeperator === "." && readabilitySeperator === ",") {
//         result = val.toLocaleString(alternateLocale, { maximumFractionDigits: fractionDigits, minimumFractionDigits: fractionDigits });
//     }
//
//     console.log(result)
//
//
//     return result
// }
