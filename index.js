const express = require('express');
const testRoute = require('./routes/testRoute')

const app = express();

app.use(express.json())
app.use('/api', testRoute)

module.exports = app;