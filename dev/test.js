const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createnewBlock(2389, '0ASCXDFSGDFGDFG', 'SDGFDGE13DRTE')
bitcoin.createnewBlock(1244, '0ASCXDFSGDFGDFG', 'SDE3H5DF13DRTE')
bitcoin.createnewBlock(2670, '46TUDFSGDFGDFG', 'SDGFDTYGHDRTE')

console.log(bitcoin);