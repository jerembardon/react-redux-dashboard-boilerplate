const UserController = require("./controllers/user.js");
require("./services/passport");
const passport = require("passport");

const requireToken = passport.authenticate("jwt", { session: false });
const validCredential = passport.authenticate("local", {
  session: false
});
module.exports = function(expressServer) {
  expressServer.post("/signup", UserController.signup);
  expressServer.get("/lol", requireToken, function(req, res) {
    res.send({ result: "contenu sécurisé" });
  });
  expressServer.post("/signin", validCredential, UserController.signin);
};
