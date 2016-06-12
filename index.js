'use strict';

var express = require("express");
var app = express();
var logger = require('./helpers/logger');
var config = require('config');

var server = app.listen(config.get('server.port'), config.get('server.host'), function () {
	var host = server.address().address;
	var port = server.address().port;
	logger.info('Server start at http://%s:%s', host, port);
});

//
app.get('/hello', function (req, res) {
	logger.info('Đi chỗ khác chơi: %s', req.connection.remoteAddress);
	res.send(JSON.stringify({'hello': 'world !!!'}))
});
