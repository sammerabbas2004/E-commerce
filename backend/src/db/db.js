const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb://0.0.0.0/food-view") 
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}
module.exports = connectDB; 