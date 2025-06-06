/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    const backtrack = (index, path) => {
        if (path.length === digits.length) {
            result.push(path);
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };

    backtrack(0, '');
    return result;
};