const User = require("../models/user");
const lodash = require("lodash");
const jwt = require("jwt-simple");
const config = require("./../config");

// Function for creating user Token
function getTokenForUser(user) {
  let date = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: date
    },
    config.secret
  );
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne(
    {
      email: email
    },
    function(err, existingUsers) {
      if (err) {
        return next(err);
      }

      if (existingUsers) {
        return res.status(422).send({
          error: "Un utilisateur avec cet email éxiste déjà"
        });
      }

      if (lodash.isEmpty(email) || lodash.isEmpty(password)) {
        return res.status(422).send({
          error: "Email ou mot de passe vide"
        });
      } else {
        const user = new User({
          email: email,
          password: password
        });
        user.save(function(err) {
          if (err) {
            return next(err);
          }
          res.json({ token: getTokenForUser(user) });
        });
      }
    }
  );
};

exports.signin = function(req, res, next) {
  res.json({ token: getTokenForUser(req.user) });
};
