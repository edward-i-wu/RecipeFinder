const express = require('express');
const app = express();
const bodyParser= require('body-parser');

const uuid = require('uuid/v4');


const fs = require('fs');
const fileUpload = require('express-fileupload');

app.use(fileUpload());




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
    // .image because that is what it is named the client used to append to the FormData
    let upload = req.files.image;

    //set up filename to be saved
    let fileEnd = Date.now();
    let name = fileEnd + upload.name;

    //req body is the json object we want to save to recipes.json- attach the filenamebefore saving
    let recipeBase = require('./recipes.json')
    
    //get json data
    //also need to store filename with json data
    upload.mv(`./server/Images/${name}`,function(err) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        req.body.fileName = name;
        recipeBase.push(req.body);
        console.log(recipeBase);

        //rewrite to json
        let content = JSON.stringify(recipeBase);
        fs.writeFile('./server/recipes.json',content,(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

        
        return res.status(200).json('posted');
    });
});

app.listen(8080,()=>{console.log('server running on 8080')});
