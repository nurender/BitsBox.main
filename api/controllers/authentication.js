const mongoose = require('mongoose');
const user = mongoose.model('user');
const Chat = mongoose.model('chat');
require("dotenv").config(); //env
var jwt = require('jsonwebtoken');


// user phone number
exports.create_a_user = function (req, res, next) {
	var usersave = new user(req.body);
	usersave.save(function (err, task) {
		if (err) {
			next(err);
		}
		else {
			res.send({
				data: task
			});
		}
	});
}

// user otp
exports.login = function (req, res, next) {
	var token = jwt.sign({ userid: req.body.userid ,password:req.body.password }, 'nurenderbishnoi')
	// user.findOneAndUpdate({ userid: req.body.userid ,password:req.body.password }, { token: token }, { new: true }, function (err, task2) {
	// 	if (err) {
	// 		next(err);
	// 	}
	// 	else {
	// 		res.send({
	// 				data:  task2  || {},
	// 				statusCode: res.statusCode || 200,
	// 		})

	// 	}
	// });
	user
		.find({ userid: req.body.userid ,password:req.body.password})
		.exec(function (err, task) {
			if(err){
				next(err)
			}
			else{
				// res.send({
				// 	data: task
				// })
				user.findOneAndUpdate({ userid: req.body.userid ,password:req.body.password }, { token: token }, { new: true }, function (err, task2) {
					if (err) {
						next(err);
					}
					else {
						res.send({
								success:true,
								data:  task2  || {},
								statusCode: res.statusCode || 200,
						})
			
					}
				});
			}
		})
};

exports.chat = function (req, res, next) {
	user
		.find({ userid: req.body.userid ,password:req.body.password})
		.exec(function (err, task1) {
			if(err){
				next(err)
			}
			else{
				// res.send({
				// 	data: task
				// })
				const chat = new Chat();
				chat.chat = req.body.chat;
				chat.user = user._id;
				chat.save(function (err, task) {
					if (err) {
						next(err);
					}
					else {
						
						user.findOneAndUpdate({ _id: task1[0]._id }, {"$push":{chat:chat._id}},{ new: true }, function (err, task1) {
							if (err) {
								next(err);
							}
							else {
								res.send({
									data: task1			
								});
							}
						});
					}
				});
			}
		})
};

exports.getchat = function (req, res, next) {
	user
		.find({ userid: req.body.userid ,password:req.body.password}).populate("chat")
		.exec(function (err, task) {
			if(err){
				next(err)
			}
			else{
				res.send({
					data: task
				})
			}
		})
};