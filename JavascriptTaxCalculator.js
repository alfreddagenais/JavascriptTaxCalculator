/**
 * Round value of a number
 *
 * @param {number} x The number you need round
 * @param {number} decimals Num decimal count of the round
 */
var getNumberRound = function(x, decimals) {
    return Number(Math.round(x + 'e' + decimals) + 'e-' + decimals);
};

/**
 * Count Decimals
 *
 * @param {number} x The number you need calculate decimal
 *
 * @version 1.0.0
 * @copyright https://github.com/alfreddagenais/countDecimals
 */
function countDecimals(x) {
    if (x && x % 1) {
        return x.toString().length - x.toString().indexOf('.') - 1 || 0;
    }
    return 0;
}

/**
 * Get Tax Value from a number
 *
 * @param {number} x The number you need calculate tax
 * @param {number} tax Tax value (ex: 14.975, 5...)
 * 
 * @version 1.0.0
 * @copyright https://github.com/alfreddagenais/JavascriptTaxCalculator
 */
function getTaxValueFromNumber(x, tax) {
    try {
        if (x && !isNaN(x) && tax && !isNaN(tax)) {
            x = parseFloat(x);
            tax = parseFloat(tax);
            return getNumberRound((x / 100) * tax, countDecimals(tax));
        }
    } catch (err) {
        console.log(err);
    }
    return null;
}

/**
 * Add Tax Value to a number
 *
 * @param {number} x The number you need calculate tax
 * @param {number} tax Tax value (ex: 14.975, 5...)
 * 
 * @version 1.0.0
 * @copyright https://github.com/alfreddagenais/JavascriptTaxCalculator
 */
function addTaxValueToNumber(x, tax) {
    try {
        if (x && !isNaN(x) && tax && !isNaN(tax)) {
            x = parseFloat(x);
            return getNumberRound(getTaxValueFromNumber(x, tax) + x, countDecimals(tax));
        }
    } catch (err) {
        console.log(err);
    }
    return null;
}

/**
 * Get Inverse Tax from a number
 *
 * @param {number} x The number you need get the tax number
 * @param {number} tax Tax value (ex: 14.975, 5...)
 * 
 * @version 1.0.0
 * @copyright https://github.com/alfreddagenais/JavascriptTaxCalculator
 */
function getInverseTaxValueFromNumber(x, tax) {
    try {
        if (x && !isNaN(x) && tax && !isNaN(tax)) {
            x = parseFloat(x);
            tax = parseFloat(tax);
            return getNumberRound((x / (parseFloat(tax) + 100)) * tax, countDecimals(tax));
        }
    } catch (err) {
        console.log(err);
    }
    return null;
}

/**
 * Remove Tax from a number
 *
 * @param {number} x The number you need remove the tax number
 * @param {number} tax Tax value (ex: 14.975, 5...)
 * 
 * @version 1.0.0
 * @copyright https://github.com/alfreddagenais/JavascriptTaxCalculator
 */
function removeTaxValueFromNumber(x, tax) {
    try {
        if (x && !isNaN(x) && tax && !isNaN(tax)) {
            x = parseFloat(x);
            return getNumberRound(x - getInverseTaxValueFromNumber(x, tax), countDecimals(tax));
        }
    } catch (err) {
        console.log(err);
    }
    return null;
}