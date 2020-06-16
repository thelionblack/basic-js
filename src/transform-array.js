const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = [...arr];
  if(arr1.length === 0) return arr1;
  if(!Array.isArray(arr1)) throw new Error();
  for(let i = 0;i < arr1.length;i++){
    if(arr1[0] === '--discard-prev' || arr1[0] === '--double-prev'){
      arr1.splice(i, 1);
    }else if(arr1[arr1.length - 1] === '--discard-next' || arr1[arr1.length - 1] === '--double-next'){
      arr1.splice(arr1.length - 1, 1);
    }
    if(arr1[i] === '--discard-prev'){
      arr1.splice(i - 1, 2);
      i--;
    }else if(arr1[i] === '--discard-next'){
      arr1.splice(i, 2);
      if(arr1[i] === '--double-prev' || arr1[i] === '--discard-prev'){
        arr1.splice(i, 1);
      }
      i--;
    }else if(arr1[i] === '--double-prev'){
      arr1.splice(i, 1, arr1[i - 1]);
      i--;
    }
    else if(arr1[i] === '--double-next'){
      arr1.splice(i, 1, arr1[i + 1]);
      i--;
    }
  }
  return arr1
};
