// Open up user.js, and require mongoose and passport-local-mongoose at the top.
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');
//  in user.js, define the UserSchema. Users should have the attributes email and password.
var UserSchema = new Schema({
  username: String,
  password: String
});

// add passportLocalMongoose to the UserSchema. passportLocalMongoose takes care of hashing and salting the user's plain-text password when they sign up. It also takes of comparing the password the user enters at login to their hashed and salted password stored in the database.
UserSchema.plugin(passportLocalMongoose);
// The last step is to create the User model and export it.
var User = mongoose.model('User', UserSchema);
module.exports = User;
