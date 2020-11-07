const app = require("express")();

app.use('/users', require('../components/users/routes'));


module.exports = app;