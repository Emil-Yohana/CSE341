const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use('/professional', require('./routes/professional'))

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));