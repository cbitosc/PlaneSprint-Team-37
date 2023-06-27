const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://hackathon:T9PxLWHZ8mAz0ZZc@cluster0.boq2gl3.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true 
  });
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};