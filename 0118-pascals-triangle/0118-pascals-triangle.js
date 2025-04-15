/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = [1]; // First element is always 1

        for (let j = 1; j < i; j++) {
            // Middle elements are sum of two elements above
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        if (i > 0) {
            row.push(1); // Last element is also 1 for rows > 0
        }

        result.push(row);
    }

    return result;
};
