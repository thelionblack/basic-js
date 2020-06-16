const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if(typeof(value) === "undefined"){
      this.chain.push(`~( )~`)
      return this
    }
    
    this.chain.push(`~( ${value} )~`)
    return this
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || parseFloat(position) != position || position <= 0 || position > this.chain.length){
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this

  },
  finishChain() {
    let chain = this.chain.join("").slice(1, -1);
    this.chain = [];
    return chain;
  }
};

module.exports = chainMaker;
