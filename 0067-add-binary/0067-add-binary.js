/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1, j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    
    return result;
};