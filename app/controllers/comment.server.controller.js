// Create a new render method to render index.ejs
//
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.comments = function (req, res) {
  //display comments.ejs
  res.render("comments", {
    title: "Comments - Course Evaluation",
    fname: "Demario".toUpperCase(),
    lname: "Douce".toUpperCase(),
  });
};

exports.thankYou = function (req, res) {
  //display comments.ejs
  res.render("thankyou", {
    title: "Thank You - Course Evaluation",
    email: "wqdqw",
    comment: "dqwdq",
  });
};

exports.submitComments = function (req, res) {
  //display comments.ejs
  res.render("submit_comments", {
    title: "Submit Comments - Course Evaluation",
  });
};
