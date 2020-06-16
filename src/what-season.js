const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!(date instanceof Date)){
    if(!date){
      console.log(1)
      return 'Unable to determine the time of year!'
    }
    console.log(2)
    throw new Error()
  } 
  if(date.hasOwnProperty("toString")){
    throw Error()
  }   
  try{
    let currentDate = date.getMonth();
    switch (currentDate) {
      case 11:
      case 0:
      case 1:
        return 'winter';
        break;
      case 2:
      case 3:
      case 4:
        return 'spring';
        break;
      case 5:
      case 6:
      case 7:
        return 'summer';
        break;   
      case 8:
      case 9:
      case 10:
        return 'autumn';
        break;     
    }
    console.log(currentDate)
  }catch(err){
    console.log(err.message)
    return err
  }
};
