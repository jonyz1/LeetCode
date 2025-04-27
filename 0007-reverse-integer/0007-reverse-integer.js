/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    while (x > 0) {
        const digit = x % 10;
        // Check for overflow before multiplying
        if (result > Math.pow(2, 31) / 10) {
            return 0;
        }
        result = (result * 10) + digit;
        x = Math.floor(x / 10);
    }
    
    result *= sign;
    
    // Final overflow check
    if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return result;
};