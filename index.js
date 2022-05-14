require('dotenv').config();

var express = require('express')
var app = express()

app.listen(process.env.PORT || 3000, function () {
	console.log("start! express server on port 3000");
})

const { Client } = require('pg');
const connectionString = process.env.DB_URI;

const client = new Client({
	connectionString,
	ssl: {
		rejectUnauthorized: false,
	}
});
client.connect(err => {
	if (err) console.log(err);
	else {
		console.log("데이터베이스 연결 성공");
	}
});

app.get('/', function(req, res) {
	res.send("Hello World")
})
