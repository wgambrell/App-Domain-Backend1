var cookieSession = require('cookie-session');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
const multer = require('multer');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
var MemoryStore =session.MemoryStore;
var request = require('request');



const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
db.sequelize.sync().then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
});

app.set('trust proxy', true)

require('./app/routes/generalLedger.routes')(app);
require('./app/routes/journal.routes')(app);
require('./app/routes/journalFiles.routes')(app);
require('./app/routes/journalAccounts.routes')(app);
require('./app/routes/passwordReset.routes')(app);
require('./app/routes/chartAccount.routes')(app);
require('./app/routes/login.routes.js')(app);
require('./app/routes/users.routes.js')(app);
require('./app/routes/log.routes.js')(app);

// Create a Server
var server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
})

function initial(){

    let users = [
        {
            userName: "admin",
            userPassword: "password",
            userRole: "admin",
            securityQ: "What is your favorite color?",
            securityA: "Blue",
            email: "abbot@ksu.com",
            firstName: "Bud",
            lastName: "Abbot"
        },
        {
            userName: "manager",
            userPassword: "password",
            userRole: "manager",
            securityQ: "What is your favorite color?",
            securityA: "Blue",
            email: "costello@ksu.com",
            firstName: "Lou",
            lastName: "Costello"
        },
        {
            userName: "accountant",
            userPassword: "password",
            userRole: "accountant",
            securityQ: "What is your favorite color?",
            securityA: "Blue",
            email: "bonnie@ksu.com",
            firstName: "Bonnie",
            lastName: "Parker"

        },
        {
            userName: "Bob",
            userPassword: "password",
            userRole: "accountant",
            securityQ: "What is your favorite color?",
            securityA: "Blue",
            email: "clyde@ksu.com",
            firstName: "Clyde",
            lastName: "Barrow"
        },
        {
            userName: "Tyler",
            userPassword: "password",
            userRole: "accountant",
            securityQ: "What is your favorite color?",
            securityA: "Blue",
            email: "wtgambrell@gmail.com",
            firstName: "Tyler",
            lastName: "Gambrell"
        }


    ]


    // Init data -> save to MySQL
    const User = db.users;



    for (let i = 0; i < users.length; i++) {
        //User.create(users[i]);
    }

}