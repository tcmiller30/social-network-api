const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork');

module.exports = mongoose.connection;