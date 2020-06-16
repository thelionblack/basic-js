const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let result = "",
      separatorLength = 1,
      additionSeparatorLength = 1;
  (typeof(options.additionRepeatTimes) === "undefined") ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
  (typeof(options.addition) === "undefined") ? options.addition : options.addition += "";
  str += "";

  
  if(options.additionRepeatTimes && options.addition) {

    if(options.additionSeparator) {
      additionSeparatorLength = options.additionSeparator.length;
      options.addition += options.additionSeparator;
    }else {
      options.addition += '|';
    }
    
    if(options.addition){
      for(let i = 0; i < options.additionRepeatTimes;i++){
        str += options.addition;
      } 
    }
    str = str.slice(0, -additionSeparatorLength)
  }
  

  if(options.repeatTimes){
    if(options.separator) {
      separatorLength = options.separator.length;
      str += options.separator;
    }else {
      str += "+";
    }
  }


  if(options.repeatTimes){
    for(let i = 0; i < options.repeatTimes;i++){
      result += str;
    } 
    result = result.slice(0, -separatorLength);
  }else {
    result += str;
  }


  return result
};
  