var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use('*', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Authorization, x-user-access-token, x-access-token, Content-Type, Accept"
    );
    next();
})

app.listen(port,function(err,success) {
    if(err) {
        console.log(err)
    }
   
        console.log("Server running on port ",port);
    
})
