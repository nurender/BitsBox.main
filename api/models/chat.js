var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var chat = new Schema({
  chat: {
    type: String
  },
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
  }
});
module.exports = mongoose.model('chat', chat);