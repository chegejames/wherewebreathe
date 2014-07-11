var mongoose = require('mongoose');
//mongoose.set('debug', true);
var userDB = mongoose.connect('mongodb://localhost/users');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  //'_id' used as userID for linking to other tables, autogenerated by DB
  //password registered from newusers table stored as salt and hash
    username: String,
    salt: String,
    hash: String, 
    email: String,
    HID: String
});

var NewUser = new Schema({
    username: String,
    password: String, 
    email: String,
    HID: String, 
    token: String
});
User.plugin(passportLocalMongoose, {usernameField: "email"});
NewUser.plugin(passportLocalMongoose, {usernameField: "email"});

//module.exports = userDB.model('Account', Account);
module.exports = {
    user: userDB.model('user', User),
    newuser: userDB.model('newuser', NewUser)
};

