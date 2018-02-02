var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var notesSchema = new Schema({
    title: String,
    notes: String,
    favorite: Boolean
});

var Note = mongoose.model("Note", notesSchema);

module.exports = Note;

