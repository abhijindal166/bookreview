const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require('validator'); 
const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'invalid email'],
  },
  password: {
    type: String,
    required: true,
  },
  points:{
    type:Number,
   
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

schema.methods.generateauthtoken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, "abhishekjindalabhishekjindal");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model("post", schema);

module.exports = User;
