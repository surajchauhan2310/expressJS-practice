const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "Barcelona";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(database);
  return (collection = db.collection("Barca_A"));
  //   let response = await collection.find({ age: "17" }).toArray();
  //   console.log(collection.find({}).toArray());
  //   console.log(response);
}
module.exports = dbConnection;
