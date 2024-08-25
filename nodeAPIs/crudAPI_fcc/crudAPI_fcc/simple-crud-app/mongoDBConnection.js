const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB Atlas connection string
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // You can now perform operations with your database
        const database = client.db('<dbname>');
        const collection = database.collection('test');
        const result = await collection.insertOne({ name: "MongoDB", type: "Database" });
        console.log(`Inserted document: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
