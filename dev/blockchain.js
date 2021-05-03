
// in Js there are no 'Clasess' as they are in many other lenguages, instead clasess are sugar-coding on top of constructor functions and the object prototype
//But we could try something like this:
// class Blockchain {
//     constructor() {
//         this.chain = [];
//         this.pendingTransactions = [];
//     }
//     //.. all other methods
// }

//Creatiing Data/structure

function Blockchain() {
    this.chain = [] // this will store every block we create as a chain
    this.pendingTransactions = [] // this will hold new trnasaction before they're place into a block and mined
}

Blockchain.prototype.createnewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = { // This will be a block iside of our chain. All data that we nweed is going to be store here.
        index: this.chain.length + 1, //this will be the blockNumber in our chain
        timestamp: Date.now(), // when this block was created
        transactions: this.pendingTransactions, //Inside of this block all the new transactions that had been jus created so they can never be changed/ On this block should be all pending/new transactions that are wainting to be placed into a block
        nonce: nonce, //number from a proof of work proving that we have created this new block in a legitimate way
        hash: hash, // this will be tha data from our new block containing a string with all transactions made
        previousBlockHash: previousBlockHash // hash of previous block
    } 
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

//Adding method to prototype to allow retreival of last created Block
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

// Create a new transaction
Blockchain.prototype.createNewTransaction = function(amount, sender, receipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        receipient: receipient
    }

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

// exports code to be tested
module.exports = Blockchain; 