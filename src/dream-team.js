const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = "";
  if(!Array.isArray(members)) {
    return false
  }

  for(let i = 0;i < members.length;i++){
    if(typeof(members[i]) === "string") {
      members[i] = members[i].trim()
      members[i] = members[i].toUpperCase()      
    }        

  }
  members.sort();

  members.forEach(e => {
    if(typeof(e) === "string") {
      dreamTeam += e.slice(0, 1)      
    }    
  })

  return dreamTeam
};
