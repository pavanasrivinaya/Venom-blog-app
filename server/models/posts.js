const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = mongoose.Schema({
    category: { type: Schema.Types.ObjectId,ref:"Category"},
    title: String,
    category: String,
    content: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema)