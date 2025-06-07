/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let totalMoves = m + n - 2;
    let downMoves = m - 1;
    
    // Compute C(totalMoves, downMoves)
    let result = 1;
    
    for (let i = 1; i <= downMoves; i++) {
        result = result * (totalMoves - downMoves + i) / i;
    }
    
    return Math.round(result);  // sometimes floating point imprecision
};