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
            notes
        })
    }).sort({_id:-1})
});

app.post('/notes', (req, res) => {
    var title = req.body.title;
    var notes = req.body.notes;
    var favorite = req.body.favorite;
    debugger

    var new_note = new Note({
        title: title,
        notes: notes,
        favorite: favorite
    });

    new_note.save(function(error, note){
        if(error){
          console.log(error);
        }
          res.send({
            note
          })
        
      });

});

app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id,'title notes', function(error, notes){
        if(error){
            console.log(error);
        }
        res.send({
            notes
        })
    })
});

app.put('/notes/:id', (req, res) => {
    Note.findById(req.params.id,'title notes', function(error, notes){
        if(error){
            console.log(error);
        }
        notes.title = req.body.title
        notes.notes = req.body.notes
        notes.favorite = req.body.favorite
        notes.save(function(error){
            if(error){
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
});

app.delete('/notes/:id', (req, res) => {
    Note.remove({
        _id: req.params.id
    }, function(err, note){
        if(err)
        res.send(err)
        res.send({success:true})
    })
});



app.listen(process.env.PORT || 8081);