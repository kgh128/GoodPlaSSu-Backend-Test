const { response } = require('express');
var express = require('express')
var app = express()
app.listen(process.env.PORT || 3000, function () {
	console.log("start! express server on port 3000");
})

const db = require('./db');
app.get('/', function(req, res) {
	res.send("Hello World")
	var responseData = {};
	var query1 = db.query('Insert into profile (id, name) values (1, "abc")')
	var query = db.query('select * from profile', (err, rows) => {
		if (err) {
			res.send('error')
		};
		if (rows.length) {
			res.send('Success')
		} else {
			res.send('fail')
		}
	})
})
