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
  //display index.ejs
  res.render("signin", {
    title: "Sign in - Course Evaluation",
  });
};
