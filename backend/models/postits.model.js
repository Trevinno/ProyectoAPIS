const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostitSchema = new Schema({
    size: { type: Number, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true},
    type: {type: String, required: true},
    img_url: {type: String, required: true},
  }, {  
    timestamps: true,
  });

  const Postit = mongoose.model('Postit', PostitSchema);

  module.exports = Postit;