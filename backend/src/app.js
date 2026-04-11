//Create Server
const express = require('express');
const cookies = require('cookie-parser');
const authRoutes = require('./routes/auth.routers');
const foodRoutes = require('./routes/food.router');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.get('/', (req, res) => {
    res.send('Hi World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

module.exports = app;