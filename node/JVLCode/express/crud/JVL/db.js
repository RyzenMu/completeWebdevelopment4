const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const objectID = mongodb.ObjectId;
let dataBase;

async function getDatabase(){
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017');
    dataBase = client.db('library');

    if (!dataBase){
        console.log('Database not connected');
    }
    return dataBase;
}

module.exports = {
    getDatabase,
    objectID,
}; 