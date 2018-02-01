const express = require('express'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

var Note = require('../models/notes');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});


app.get('/notes', (req, res) => {
    Note.find({},'title notes', function(error, notes){
        if(error){
            console.log(error);
        }
        res.send({
            notes: notes
        })
    }).sort({_id:-1})
});


app.listen(process.env.PORT || 8081);