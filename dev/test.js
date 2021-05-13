const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    chain: [
    {
    index: 1,
    timestamp: 1620878709120,
    transactions: [ ],
    nonce: 100,
    hash: "0",
    previousBlockHash: "0",
    },
    {
    index: 2,
    timestamp: 1620879299331,
    transactions: [ ],
    nonce: 18140,
    hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    previousBlockHash: "0",
    },
    {
    index: 3,
    timestamp: 1620879358713,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recepient: "6850d800b3a011eb92a325aabf5c7403",
    transactionId: "c822c300b3a111eb92a325aabf5c7403",
    },
    {
    amount: 10,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "d55dc150b3a111eb92a325aabf5c7403",
    },
    {
    amount: 20,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "d99c5560b3a111eb92a325aabf5c7403",
    },
    {
    amount: 30,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "db8ba240b3a111eb92a325aabf5c7403",
    },
    ],
    nonce: 36723,
    hash: "00002d0f9ff53fe989a710ee349a60328f7480ae3d3bc58a13cf6683b8640ca6",
    previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
    index: 4,
    timestamp: 1620879405684,
    transactions: [
    {
    amount: 12.5,
    sender: "00",
    recepient: "6850d800b3a011eb92a325aabf5c7403",
    transactionId: "eb817ad0b3a111eb92a325aabf5c7403",
    },
    {
    amount: 40,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "f88e8b50b3a111eb92a325aabf5c7403",
    },
    {
    amount: 50,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "fb47def0b3a111eb92a325aabf5c7403",
    },
    {
    amount: 60,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "fdb44b10b3a111eb92a325aabf5c7403",
    },
    {
    amount: 70,
    sender: "ASFUASNFDSKF3564",
    recepient: "DFGVR$365465DFGD",
    transactionId: "004b97c0b3a211eb92a325aabf5c7403",
    },
    ],
    nonce: 273128,
    hash: "0000b7f1cfb683dfbbbeff42615b5695d18b4f3ec006094a9c8230c82ca9fd97",
    previousBlockHash: "00002d0f9ff53fe989a710ee349a60328f7480ae3d3bc58a13cf6683b8640ca6",
    },
    ],
    pendingTransactions: [
    {
    amount: 12.5,
    sender: "00",
    recepient: "6850d800b3a011eb92a325aabf5c7403",
    transactionId: "0780d690b3a211eb92a325aabf5c7403",
    }
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [ ],
    };

console.log('VALID:', bitcoin.chainIsValid(bc1.chain));

