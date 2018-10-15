const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Import bcrypt for securising password
const bcrypt = require("bcrypt-nodejs");

// Schema for USERS
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true
  },
  password: String
});

// Function before save for securising password
// Doc: https://www.npmjs.com/package/bcrypt-nodejs
userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// For using a method anywhere
userSchema.methods.isPasswordEqualTo = function(externalPassword, done) {
  bcrypt.compare(externalPassword, this.password, function(err, isMatch) {
    if (err) {
      return done(err);
    }
    done(null, isMatch);
  });
};

// Exports model USERS
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
