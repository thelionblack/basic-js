const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0,
      arr1 = arr.join().split(",");
  
  arr1.forEach(e => {
    if(e == "^^"){
      count++
    }
  })

  return count;
};
