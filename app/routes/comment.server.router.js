//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument

// Load the 'student' controller to use User methods create and list
//var student = require("../controllers/student.server.controller");
//Load the 'comment' controller
var comment = require("../controllers/comment.server.controller");
//x
//handle routing for get and post request
module.exports = function (app) {
  //handle a get request made to root path
  app.get("/comments", comment.comments); //go to http://localhost:3000/comments
  app.post("/comments", comment.create);
  app.get("/thankyou", comment.thankYou); //go to http://localhost:3000/thankyou
  app.get("/submit_comments", comment.submitComments); //go to http://localhost:3000/submit_comments
};
