/**
 * @param {number} n
 * @return {string}
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1"; 

    let current = "1";
    for (let i = 2; i <= n; i++) {
        let prev = current;
        current = "";
        let count = 1;
        
        for (let j = 1; j < prev.length; j++) {
            if (prev[j] === prev[j - 1]) {
                count++;
            } else {
                current += count.toString() + prev[j - 1];
                count = 1;
            }
        }
        
        current += count.toString() + prev[prev.length - 1]; 
    }

    return current;
};
