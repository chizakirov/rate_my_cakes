const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cake_api', {useNewUrlParser: true });

const CommentSchema = new mongoose.Schema({
  rating: {type: Number, required: [true, "Choose a rating"]},
  comment: {type: String, required: [true, "Enter comment please"], minlength: [2, "Enter at least 2 characters for comment"]},
})

const CakeSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Baker's name is required"], minlength: [2, "Baker's name must be at least 2 characters"]},
  url: {type: String, required: [true, "Image's url is required"]},
  comments: [CommentSchema]
}, {timestamps:true});

const cake = mongoose.model('Cake', CakeSchema);
const comment = mongoose.model('Comment', CommentSchema);
module.exports = {
  Cake: cake,
  Comment: comment
}

