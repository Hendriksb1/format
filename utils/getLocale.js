/*
currently supporting de-DE by default and en-US is optional
*/
export function getLocale(decimalSeperator, thousandsSeparator) {

    let result = 'de-DE';

    if (decimalSeperator === "." && thousandsSeparator === ",") {
        result = 'en-US';
    }

    return result
}
