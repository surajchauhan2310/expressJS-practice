const express = require("express");
const dbConnection = require("./mongodb");
const { ObjectId } = require("mongodb");
const app = express();
const PORT = 4000;

//GET API method

app.get("/", async (req, res) => {
  let data = await dbConnection();
  console.log("The data is", data);

  const result = await data.find({}).toArray();
  res.send(result);
  //   console.log(result);
});
  
//Callback hell after suing the then & catch method

// app.get("/", (req, res) => {
//   return dbConnection()
//     .then((res1) => {
//       return res1
//         .find()
//         .toArray()
//         .then((data) => {
//           // return data;
//           return res.json(data);
//         })
//         .catch((err) => {
//           console.error("Error while querying data in db", err);
//         });
//     })
//     .catch((err) => {
//       console.error("Error while fetching data", err);
//     });
//   //   console.log(result);
// });
//Middleware for the POST method
app.use(express.json());

//POST API method
app.post("/", async (req, res) => {
  // console.log(req.body);
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  res.send(result);
});

//PUT API method
app.put("/:name", async (req, res) => {
  let data = await dbConnection();
  let result = await data.updateOne(
    {
      // name: "heisenberg",
      name: req.params.name, // Match the document based on the name in the URL
    },
    {
      $set: { nationality: req.body.nationality }, // Update only the nationality field
    }
  );
  // console.log(req.body);
  res.send(result);
});

//DELETE API method
app.delete("/:id", async (req, res) => {
  let data = await dbConnection();
  let result = await data.deleteOne({
    _id: new ObjectId(req.params.id),
  });

  // console.log(data);
  console.log(req.params.id);
  res.send(result);
});

//PORT configuration
app.listen(PORT, () => {
  console.log("Server listening at", PORT);
  //   console.log(result);
});
