const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://muruga13in2022@gmail.com:mongoGold1@cluster-0.mongodb.net/jvl_code_node?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);