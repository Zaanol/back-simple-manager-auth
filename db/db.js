const mongoose = require('mongoose');

async function connect() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => 
        console.error(error)
    );
}

module.exports = {
    connect
};