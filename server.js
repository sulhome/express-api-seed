var app = require('./app');

var host = process.env.HOST || 'localhost';
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.info('server listining on this address http://%s:%s', host, port);
});