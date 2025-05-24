/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];

        if (current[0] <= last[1]) {
            // Overlap -> merge
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap -> add to result
            result.push(current);
        }
    }

    return result;
};