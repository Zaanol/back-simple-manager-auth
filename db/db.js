const mongoose = require('mongoose');

async function connect() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('Connected to MongoDB');

        const testSchema = new mongoose.Schema({
            name: String
        });
    
        const TestEntity = mongoose.model('Test', testSchema);
    }).catch((error) => 
        console.error(error)
    );
}

module.exports = {
    connect
};