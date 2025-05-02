/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    nums.sort((a, b) => a - b);
    
    let closestSum = Infinity;
    
    
    for (let i = 0; i < nums.length - 2; i++) {
      
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
               
                return sum;
            }
        }
    }
    
    return closestSum;
};
