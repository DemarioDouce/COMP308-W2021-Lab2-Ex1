//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument

// Load the 'student' controller to use User methods create and list
var student = require("../controllers/student.server.controller");
//Load the 'comment' controller
//var comment = require("../controllers/comment.server.controller");
//x
//handle routing for get and post request
module.exports = function (app) {
  //handle a get request made to root path
  app.get("/", student.index); //go to http://localhost:3000/
  app.get("/signup", student.signUp); //go to http://localhost:3000/signup
  app.get("/signin", student.signIn); //go to http://localhost:3000/signin
};
