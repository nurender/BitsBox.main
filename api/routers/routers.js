module.exports = function (app) {
    var user = require('../controllers/authentication');

    // user phone number
    app.route('/api/user')
        .post(user.create_a_user)

    // user verify otp 
    app.route('/api/login')
        .get(user.login)

    app.route('/api/chat')
        .post(user.chat)

    app.route('/api/getchat')
        .get(user.getchat)

}