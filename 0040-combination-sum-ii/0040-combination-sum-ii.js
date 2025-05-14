/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    function backtrack(start, target, path) {
        if (target === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
         
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            const current = candidates[i];
            if (current > target) break; 
            path.push(current);
            backtrack(i + 1, target - current, path); 
            path.pop(); 
        }
    }

    backtrack(0, target, []);
    return result;
};
