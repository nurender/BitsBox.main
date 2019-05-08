var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
  name: {
    type: String

  },
  lastname: {
    type: String
  },
  userid: {
    type: String
  },
  password: {
    type: String
  },
  token:{
    type:String
  },
  chat:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'chat'
  }]
});
module.exports = mongoose.model('user', user);