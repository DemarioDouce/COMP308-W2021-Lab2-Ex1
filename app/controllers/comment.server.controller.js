// Load the 'Student' Mongoose model
var Student = require("mongoose").model("Student");
var Comment = require("mongoose").model("Comment");
// Create a new render method to render index.ejs
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.comments = function (req, res) {
  //display comments.ejs
  Student.findOne({ email: req.session.email }, function (err, student) {
    if (err) {
      res.json({ Error: err });
    } else {
      res.render("comments", {
        title: "Comments - Course Evaluation",
        fname: student.firstName.toUpperCase(),
        lname: student.lastName.toUpperCase(),
      });
    }
  });
};

exports.thankYou = function (req, res) {
  //display comments.ejs
  Student.findOne({ email: req.session.email }, function (err, student) {
    if (err) {
      res.json({ Error: err });
    } else {
      res.render("thankyou", {
        title: "Thank You - Course Evaluation",
        email: student.email,
        comment: "dqwdq",
      });
    }
  });
};

exports.submitComments = async function (req, res) {
  //display comments.ejs
  // find all documents
  let students = await Student.find({});
  let comments = await Comment.find({});

  res.render("submit_comments", {
    title: "Submit Comments - Course Evaluation",
    data: comments,
  });
};

//Mongoose stuff
// Create a new 'create' controller method
exports.create = function (req, res, next) {
  // Create a new instance of the 'Student' Mongoose model
  var comment = new Comment(req.body); //get data from ejs page and attaches them to the model

  // Use the 'Student' instance's 'save' method to save a new user document
  comment.save(function (err) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'redirect' object t
      res.redirect("/thankyou");
    }
  });
};
