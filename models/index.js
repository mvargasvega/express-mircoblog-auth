var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/microblog-app", {useMongoClient: true, });

module.exports.Post = require("./post");

// update /models/index.js to import/export your User model:
module.exports.User = require("./user");
