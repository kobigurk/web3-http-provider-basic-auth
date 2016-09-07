var Web3 = require('web3');
var provider = require('./basicauthhttpprovider');
var web3 = new Web3(new provider('http://localhost:1337', 'kobi', 'test'));

// execute a request
web3.eth.coinbase;
