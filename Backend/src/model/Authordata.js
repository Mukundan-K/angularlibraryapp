const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.tixpa.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema = mongoose.Schema;

const AuthorSchema = new schema({
    author: String,
    image: String,
    des: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;