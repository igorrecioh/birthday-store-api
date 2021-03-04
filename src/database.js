const MongoClient = require('mongodb').MongoClient;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB} = process.env;

async function connect() {
  try {
    const client = await MongoClient.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`,
        {useNewUrlParser: true, useUnifiedTopology: true});
    const db = client.db(`${MONGO_DB}`);
    console.log('DB connected');
    return db;
  } catch (e) {
    console.log(MONGO_HOSTNAME);
    console.log(e);
  }
}

module.exports = connect;
