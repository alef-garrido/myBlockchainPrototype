const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function(req, res) {
	res.send(bitcoin); // this sends the entire blockchain to the requester end
});


app.post('/transaction', function(req, res) {
	const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
	res.json({note: `Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function(req, res) {
	const lastBlock = bitcoin.getLastBlock();
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transactions: bitcoin.pendingTransaction,
		index: lastBlock['index'] + 1
	};
	const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

	bitcoin.createNewTransaction(12.5, "00", nodeAddress);

	const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
	res.json({
		note: "New block mined succesfully",
		block: newBlock
	});
});


//register a node and broadcast that node to the network
app.post('/register-and-broadcast-node', function(req, res) {
	const newNodeUrl = req.body.newNodeUrl;
	if (bitcoin.networlNodes.indexof(newNodeUrl) === -1) bitcoin.networkNodes.push(newNodeUrl);
	
	const regNodesPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: { newNodeURL: newNodeUrl},
			json: true
		};

		regNodesPrimises.push(rp(requestOptions));
	});

	Promise.all(regNodePromises)
	.then(data => { 
		const bulkResgisterOptions = {
			uri: newNodeUrl + '/register-node-bulk',
			method: 'POST',
			body: { allNetworkNodes:[ ...bitcoin.networkNodes, bitcoin.currentNodeUrl]},
			json: true
		};

		return rp(bulkregisterOptions);
	})
	
	.then(data => {
		res.json({ note: 'New node registered with Network successfully.'});
	});
});


//register a node with the network
app.post('/register-node', function(req, res) {

});


//register multiple nodes at once
app.post('/register-node-bulk', function(req, res) {

});


app.listen(port, function() {
        console.log(`Listening on port ${port}...`);
});



