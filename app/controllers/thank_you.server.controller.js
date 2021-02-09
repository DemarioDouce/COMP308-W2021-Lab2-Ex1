exports.render = function (req, res) {
  var session = req.session;
  var comment = req.body.comment;

  if (session.email) {
    res.render("thank_you", {
      title: "Thank You - Course Evaluation",
      email: session.email,
      logout_URL: "/logout",
      comment: comment,
    });
  } else {
    res.write("<h1>Please login first.</h1>");
    res.end("<a href=" + "/" + ">Login</a>");
  }
};
