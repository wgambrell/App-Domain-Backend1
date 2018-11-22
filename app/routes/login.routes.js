const express = require('express')
const cors = require('cors');
const corsOptions = {
    origin: 'https://sarif-financial-1.herokuapp.com',
    optionsSuccessStatus: 200,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
}

module.exports = function(app) {

    var login = require('../controllers/login.controller.js');

    //app.route('/api/loginVerify').get(login.getData).post(login.sendData);
    app.options('/api/loginVerify', cors());

    app.post('/api/loginVerify',cors(), login.sendData);

}