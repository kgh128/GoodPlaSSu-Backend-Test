var express = require('express')
var app = express()
app.listen(process.env.PORT || 3000, function () {
	console.log("start! express server on port 3000");
})

const { Client } = require('pg');
const connectionString = 'postgres://kxxbpytncaxnnz:cb3d3781392a05f804eea5299c0b5930e3f4dcfb0bfd1e289993e3110f61eb7b@ec2-3-217-113-25.compute-1.amazonaws.com:5432/d2rkvlm7s19est';

const client = new Client({
	connectionString,
})
client.connect(err => {
	if (err) console.log(err);
	else {
		console.log("데이터베이스 연결 성공");
	}
});

app.get('/', function(req, res) {
	res.send("Hello World")
})
