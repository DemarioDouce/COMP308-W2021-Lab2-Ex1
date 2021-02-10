// Load the Mongoose module and Schema object
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define a new CommentSchema
const CommentSchema = new Schema({
  //
  firstName: String,
  lastName: String,
  email: String,
  courseCode: String,
  courseName: String,
  program: String,
  semester: String,
  comment: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
//
mongoose.model("Comment", CommentSchema);
