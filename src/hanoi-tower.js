const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let countTurns = 2**disksNumber,
      countSec = Math.floor(--countTurns/(turnsSpeed/3600));

  return {
    turns: countTurns,
    seconds: countSec
  }
};
