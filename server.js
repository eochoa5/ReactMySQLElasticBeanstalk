const path = require('path');
let express = require('express');
let app = express();
let http = require('http').Server(app);
let bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});

//post endpoints

app.use(bodyParser.json());

app.post('/add', function (req, res){
    console.log(req.body);

});

//process.env.PORT ||
http.listen(5000, function(){
    console.log('SERVER RUNNING');
});