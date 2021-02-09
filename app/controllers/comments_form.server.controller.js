exports.render = function (req, res) {
  var session = req.session;

  var randomQuestion1 = [
    "Favorite topic",
    "Favorite assignment",
    "Was the teacher good",
  ];

  var randomQuestion2 = [
    "Did you like the topics",
    "Strongest skill learned",
    "Was it interactive",
  ];

  var generateQuestion1 = () => {
    let randomNumber = Math.floor(Math.random() * randomQuestion1.length);
    return randomQuestion1[randomNumber];
  };

  var generateQuestion2 = () => {
    let randomNumber = Math.floor(Math.random() * randomQuestion2.length);
    return randomQuestion2[randomNumber];
  };

  if (session.email) {
    res.render("comments_form", {
      title: "Comments Form - Course Evaluation",
      email: session.email,
      logout_URL: "/logout",
      displayQuestion1: generateQuestion1(),
      displayQuestion2: generateQuestion2(),
    });
  } else {
    res.write("<h1>Please login first.</h1>");
    res.end("<a href=" + "/" + ">Login</a>");
  }
};
