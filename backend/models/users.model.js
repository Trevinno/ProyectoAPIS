const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: { type: String, required: false },
    password: { type: String, required: false },
    client: { type: Number, required: false},
    // birthday: {type: String, required: true},
    country: {type: String, required: false},
    bio: { type: String, required: false},
    email: {type: String, required: false},
    hobbies: {type: Array, required: false},
    img_url: {type: String, required: false},
  }, {  
    timestamps: true,
  });

  const User = mongoose.model('User', UserSchema)

  module.exports = User