const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
  constructor() {
    this.max_depth=0;
  }


  calculateDepth(arr, depth=1) {
  let result=0;
  if(!Array.isArray(arr)){
    return 0;
  }

  for(let i=0; i<arr.length;i++){
    if(Array.isArray(arr[i])){
      this.max_depth=this.calculateDepth(arr[i], depth+1);
    }
  }
  if(this.max_depth<depth)
  this.max_depth=depth;
  result=this.max_depth;
  this.max_depth=0;
  return result;

}
};