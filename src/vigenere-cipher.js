const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(booleanValue = true) {
    if(!booleanValue){
      this.boolean = false;
    }else{
      this.boolean = true;
    }
  }
  encrypt(message, key) {
    if(!message && !key){throw new Error();}
    message = [...message.toUpperCase()];
    key = key.toUpperCase();
    let alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let messageFinish = [];
    let fullKey = [];
    

    for(let i = 0,j=0;i < message.length;i++){
      if(!/[a-z]/igm.test(message[i])){
        fullKey.push(message[i])
      }else{
        fullKey.push(key[j])
        j++
      }
      if(j === key.length){
        j = 0
      }
    }

    for(let i = 0; i < message.length;i++){
      if(!/[a-z]/igm.test(message[i])){
        messageFinish[i] = message[i];
      }else{
        messageFinish[i] = (alphabet.indexOf(message[i]) + alphabet.indexOf(fullKey[i])) % 26;
        messageFinish.splice(i, 1, alphabet[messageFinish[i]]);
      }
    }
    if(this.boolean){
      return messageFinish.join("");
    }else{
      return messageFinish.reverse().join("");
    }
  } 
  
  
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage && !key){throw new Error();}
    encryptedMessage = [...encryptedMessage.toUpperCase()];
    key = key.toUpperCase();
    let alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let message = [];
    let fullKey = [];

    for(let i = 0,j=0;i < encryptedMessage.length;i++){
      if(!/[a-z]/igm.test(encryptedMessage[i])){
        fullKey.push(encryptedMessage[i])
      }else{
        fullKey.push(key[j])
        j++
      }
      if(j === key.length){
        j = 0
      }
    }

    for(let i = 0; i < encryptedMessage.length;i++){
      if(!/[a-z]/igm.test(encryptedMessage[i])){
        message[i] = encryptedMessage[i];
      }else{
        message[i] = (alphabet.indexOf(encryptedMessage[i]) + 26 - alphabet.indexOf(fullKey[i])) % 26;
        message.splice(i, 1, alphabet[message[i]]);
      }
    }
    
    if(this.boolean){
      return message.join("");
    }else{
      return message.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
