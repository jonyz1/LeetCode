/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(!(-(2**31)<=x && x<=2**31-1)) return ;
    let num=x.toString();
    let len=num.length;
    for (let i=0;i<len/2;i++){
        if(!(num[i]===num[len-i-1])){
            return false
        }
    }
    return true
    
};
