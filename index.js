var express = require('express');
var app = express();

require('./config')(app);

//start server
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
