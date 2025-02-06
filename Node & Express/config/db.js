const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/men', {
    
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.error("Database connection error:", err);
});

module.exports = connection;
