var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({

  title: {
    type: String
  },

  body: {
    type: String
  }
});

var Comment = mongoose.model("Comment", CommentSchema);
// Export the Comment model
module.exports = Comment;