import {getLocale} from './getLocale.js'
import {truncateToDecimals} from './truncateToDecimals.js'
import {getLocalNumberFormat} from "./getLocalNumberFormat.js";

// returns a formatted string
// input val can be of type number or string
export function format(val = 0, fractionDigits = 2, decimalSeperator = ",", thousandsSeparator = ".", flag = true) {

    let locale = getLocale(decimalSeperator, thousandsSeparator);

    // ensure val is a number (floating-point)
    if (typeof val === 'string') {
        val = Number(val);
    }

    // to prevent rounding in certain cases
    if (val < 0 || flag === false) {
        val = truncateToDecimals(val, fractionDigits);
    }

    return getLocalNumberFormat(locale, val, fractionDigits);
}

