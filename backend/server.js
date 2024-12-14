const express = require('express');
const app = express();

const authRoute = require('./routes/auth.js');

app.use('/auth', authRoute);

app.listen(3000);