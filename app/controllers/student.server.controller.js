// Load the 'Student' Mongoose model
var Student = require("mongoose").model("Student");
// Create a new render method to render index.ejs
//
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.index = function (req, res) {
  //display index.ejs
  res.render("index", {
    title: "Home - Course Evaluation",
  });
};

exports.signUp = function (req, res) {
  let randomQuestion1 = [
    "What is your mother's maiden name?",
    "What is the name of your first pet?",
    "What was your first car?",
  ];

  let randomQuestion2 = [
    "What elementary school did you attend?",
    "What is the name of the town where you were born?",
    "Who was your childhood hero?",
  ];

  let generateQuestion1 = () => {
    let randomNumber = Math.floor(Math.random() * randomQuestion1.length);
    return randomQuestion1[randomNumber];
  };

  let generateQuestion2 = () => {
    let randomNumber = Math.floor(Math.random() * randomQuestion2.length);
    return randomQuestion2[randomNumber];
  };
  //display signup.ejs
  res.render("signup", {
    title: "Signup - Course Evaluation",
    displayQuestion1: generateQuestion1(),
    displayQuestion2: generateQuestion2(),
  });
};

exports.signIn = function (req, res) {
  //display signin.ejs
  res.render("signin", {
    title: "Sign in - Course Evaluation",
  });
};

exports.students = async function (req, res) {
  // find all documents
  let students = await Student.find({});

  res.json({ students });
};

//Mongoose stuff
// Create a new 'create' controller method
exports.create = function (req, res, next) {
  req.session.email = req.body.email;
  // Create a new instance of the 'Student' Mongoose model
  var student = new Student(req.body); //get data from ejs page and attaches them to the model

  // Use the 'Student' instance's 'save' method to save a new user document
  student.save(function (err) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'redirect' object t
      res.redirect("/comments");
    }
  });
};

// Create a new 'find' controller method
exports.find = function (req, res, next) {
  // executes, passing results to callback
  req.session.email = req.body.email;
  Student.find(
    { email: req.body.email, password: req.body.password },
    function (err, student) {
      if (err) {
        res.json({ Error: err });
      } else if (!student.length) {
        res.json({
          Error:
            "Email or password maybe wrong or you do not have an account with us.",
        });
      } else {
        res.redirect("/comments");
      }
    }
  );
};
