const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'AS79DAUHFSDF';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ASD97SFHUD',
        recipient: 'AS9DHADFS'
    },
    {
        amount: 30,
        sender: 'AS456457SHUD',
        recipient: 'ASAFSDS7'
    },
    {
        amount: 200,
        sender: 'DFG9DUHGBG',
        recipient: 'VFDGDH4DF9G'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

