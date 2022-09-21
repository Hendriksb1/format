/*
formats a number to a given locale
*/
export function getLocalNumberFormat(locale, num, fractionDigits) {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits
    }).format(num)
}


