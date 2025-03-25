/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = { '(': ')', '{': '}', '[': ']' };
    let stack = [];

    for (let char of s) {
        if (obj[char]) {
            // If it's an opening bracket, push its closing bracket to stack
            stack.push(obj[char]);
        } else {
            // If it's a closing bracket, check if it matches the last opening bracket
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
};
