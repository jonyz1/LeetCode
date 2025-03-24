/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!(1<=strs.length<=200)){return ;}
    let common=strs[0];
    let len=common.length;
    for(let i=1;i<strs.length;i++){
        let current=strs[i];
        if(!((current===current.toLowerCase()) && (0<=current.length<=200))){return ;}
        for (let j=0;j<len;j++){
            if(current[j]===common[j]){
            }else{
                common = common.slice(0, j);
                if(common==""){return ""}
                break ;
            }
        }
       
    }
     return common;
};