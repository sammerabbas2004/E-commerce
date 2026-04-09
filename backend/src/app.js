//Create Server
const express = require('express');
const cookies = require('cookie-parser');
const authRoutes = require('./routes/auth.routers');
const foodRoutes = require('./routes/food.router');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.get('/', (req, res) => {
    res.send('Hi World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);


module.exports = app;