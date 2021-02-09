module.exports = function (app) {
  //load the controllers
  var index = require("../controllers/index.server.controller");
  var login = require("../controllers/login.server.controller");
  var logout = require("../controllers/logout.server.controller");
  var thank_you = require("../controllers/thank_you.server.controller");
  var comments_form = require("../controllers/comments_form.server.controller");

  app.get("/", index.render);
  app.get("/login", login.render);
  app.post("/login", login.render);
  app.get("/thank_you", thank_you.render);
  app.get("/comments_form", comments_form.render);
  app.get("/logout", logout.render);
  //
  app.post("/", function (req, res) {
    index.render(req, res);
  });

  app.post("/comments_form", (req, res) => {
    thank_you.render(req, res);
  });
};
