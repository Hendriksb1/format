// returns a formatted string 
// input val can be of type number or string
// currently supporting de-De and en-US 
export function format(val = 0, fractionDigits = 2, decimalSeperator = ",", thousandsSeparator = ".", flag= true) {

    if (typeof val === 'string') {
        val = Number(val)
    }

    let formatToLocale = function (locale) {
        return new Intl.NumberFormat(locale, { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits }).format(val);
    }

    let result = formatToLocale( 'de-De');

    if (decimalSeperator === "." && thousandsSeparator === ",") {
        result = formatToLocale('en-US');
    }


    if (val < 0 || flag === false) {

        result = val.toString().replace(".", ',').substring(0, newLength(val, fractionDigits));

        if (val.toString().length <= newLength(val, fractionDigits)) {
            result = val.toFixed(fractionDigits).replace(".", ',')
        }

    }

    return result
}


let newLength = function (int, fractionDigits) {
    let i = int.toString().indexOf('.');
    return  int.toString().substring(0, i).length + fractionDigits + 1
}
