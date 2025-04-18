/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let len=s.length;
    if(!(1<=len && len<=15)){return ;}
    let RomanNum={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    let sum=0;
    for(let i=0;i<len;i++){
        let curr=RomanNum[s[i]];
        if((i==len-1)||curr>=RomanNum[s[i+1]]){
            sum+=curr;
        }else{
            sum-=curr;
        }  
    }
    return sum;
};
