var api = 'http://seed6.egano.net/d/';
var blockTargetInterval = 60;
var coinUnits = 1000000000000;
var symbol = "uEGN";//script changes that to µEGN
var refreshDelay = 10000;
// pools stats by MainCoins
var networkStat = {
    "egn": [
		["pool1.egano.net", "http://pool1.egano.net:9999"], //change to some existing pool 
		["pool2.egano.net", "http://pool2.egano.net:9999"]

		
    ]
};