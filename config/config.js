//This file simply loads the correct configuration file.
//According to the process.env.NODE_ENV environment variable.
//Which is set in server.js (it's value is 'development').
//This code will in fact return ./env/development.js.
module.exports = require("./env/" + process.env.NODE_ENV + ".js");
