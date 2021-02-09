exports.render = function (req, res) {
  var email = req.body.email;
  var session = req.session;

  session.email = email;
  console.log("In index function - User name = " + session.email);

  if (session.email) {
    res.redirect("/comments_form");
  } else {
    res.render("index42432", {
      title: "Home - Course Evaluation",
    });
  }
};
