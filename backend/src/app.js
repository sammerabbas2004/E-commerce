//Create Server
const express = require('express');
const cookies = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookies());

app.get('/', (req, res) => {
    res.send('Hi World!');
});
module.exports = app;