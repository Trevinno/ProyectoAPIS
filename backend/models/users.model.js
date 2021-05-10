const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    client: { type: Number, required: true},
    // birthday: {type: String, required: true},
    country: {type: String, required: true},
    bio: { type: String, required: true},
    email: {type: String, required: true},
    hobbies: {type: Array, required: true},
    img_url: {type: String, required: true},
  }, {  
    timestamps: true,
  });

  const User = mongoose.model('User', UserSchema)

  module.exports = User