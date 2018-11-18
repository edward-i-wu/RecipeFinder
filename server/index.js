const express = require('express');
const app = express();
const bodyParser= require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const fs = require('fs');

app.use(bodyParser.json({type:'application/json'}));
app.use(express.urlencoded({extended:false}));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




const baseURL= 'https://www.food2fork.com';
const api_key = '6ee4ea36eef2846253f19ed524b601ed';
const search = '/api/search?key=';

app.post('/upload', (req, res)=>{
    //let params =  {...req.body};
    //use fs to load to json
    console.log(req.body);
    //res.json(req.body);
});

app.listen(8080,()=>{console.log('server running on 8080')});
