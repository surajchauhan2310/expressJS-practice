//Creating my first expressJS page

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   // console.log("Request sent by", req.query.name);
//   res.send(
//     `<h1>Welcome to Home page</h1>
//     <a href='/about'>Go back to about</a>`
//   );
// });

// app.get("/about", (req, res) => {
//   // res.send("hello, this is a About us page");
//   res.send(
//     `<input placeholder='Enter your name' value='${req.query.name}'>
//     <button type='submit'>Submit</button>
//     <a href='/'>Go back to home</a>`
//   );
// });

// app.get("/help", (req, res) => {
//   res.send("hey! its a Help page");
// });
// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log("listening at", PORT);
// });
// -------------------------------------------------------------------------------------------

//Creating a HTML page

// const express = require("express");
// const app = express();

// const path = require("path");

// const publicPath = path.join(__dirname, "public");

// app.set("view engine", "ejs");
// // console.log(publicPath);
// //It will goint to load the static content from the 'publicPath'
// // app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(`${publicPath}/contact.html`);
// });

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Suraj Chauhan",
//     phone: "23surajrc@gmail.com",
//     email: "23surajrc@gmail.com",
//     skills: ["C++", "JS", "HTML5", "CSS3"],
//   };
//   res.render("profile", { user });
// });

// app.listen(4500);

//Middleware and its use case

// const express = require("express");
// const app = express();
// const reqFilter = require("./middleware");
// const PORT = 4000;
// const route = express.Router();

// route.use(reqFilter);

// // app.use(reqFilter);
// route.get("/suraj", (req, res) => {
//   res.send("Its a Suraj");
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the Home page!");
// });

// app.get("/contact", (req, res) => {
//   res.send("Welcome to the contact page!");
// });

// route.get("/user", (req, res) => {
//   res.send("welcome to the User page!");
// });

// app.use("/", route);
// app.listen(PORT);
// console.log("Listening at port", PORT);

// ---------------------------------------------------------------------------------
//Connect mongoDB with the node app

// dbConnection().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//DB connection
// const dbConnection = require("./mongodb");

// const main = async () => {
//   let data = await dbConnection();
//   data = await data.find().toArray();
//   console.log(data);
// };
// main();
// ------------------------------------------------------------------------------------------

//Mongoose with node JS

// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// app.use(express.json());

// const PORT = 4500;
// mongoose.connect("mongodb://localhost:27017/Barcelona");

// const playerSchema = new mongoose.Schema(
//   {
//     name: String,
//     nation: String,
//     age: Number,
//   },
//   {
//     collection: "Barca_A",
//   }
// );

// //To insert data in the mongoDB
// const saveInMongoDB = async (name, nation, age) => {
//   const playerModel = mongoose.model("Barca_A", playerSchema);
//   let data = new playerModel({ name: name, nation: nation, age: age });
//   let result = await data.save();
//   console.log(result);
//   return result;
// };
// saveInMongoDB();

//To read / find the record from the mongoDB
// const readInMongoDB = async () => {
//   const playerModel = await mongoose.model("Barca_A", playerSchema);
//   const data = await playerModel.find({ name: "Iniesta" });
//   console.log(data);
//   return data;
// };

// readInMongoDB();

//To update the data in the mongoDB
// const updateInMongoDB = async () => {
//   const playerModel = mongoose.model("Barca_A", playerSchema);
//   let data = await playerModel.updateMany(
//     {
//       name: "Pique",
//     },
//     {
//       // age: 21,
//       nation: "CAT",
//     }
//   );
// };
// updateInMongoDB();

// To delete the data in the mongoDB
// const deleteINMongoDB = async () => {
//   const playerModel = await mongoose.model("Barca_A", playerSchema);
//   const data = await playerModel.deleteOne({
//     name: "Valdes",
//   });
// };
// // deleteINMongoDB();
// app.get("/", async (req, res) => {
//   const result = await readInMongoDB();
//   res.json(result);
// });

// app.post("/", async (req, res) => {
//   const body = req.body;
//   // console.log(req);
//   console.log(body);
//   const result = await saveInMongoDB(body.name, body.nation, body.age);
//   res.json(result);
// });
// app.listen(PORT);
// console.log("Listening at port", PORT);

// ----------------------------------------------------------------------------------
const express = require("express");
require("./config");
const app = express();
const player = require("./player");
app.use(express.json());
const PORT = 5000;

//To add the data in the MOngoDB dynamically
app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new player(req.body);
  const result = await data.save();
  res.send(result);
});

//To get the data from the MongoDB
app.get("/list", async (req, res) => {
  const data = await player.find();
  res.send(data);
  console.log(data);
});

//To delete the data from the MongoDB(dynamically)
app.delete("/delete/:_id", async (req, res) => {
  const data = await player.deleteOne(req.params);
  console.log(req.params);
  res.send(data);
});

//To update the data in the Mongo DB (dynamically)
app.put("/update/:_id", async (req, res) => {
  const data = await player.updateOne(req.params, { $set: req.body });
  // console.log(data);
  console.log(req.params);
  res.send(data);
});

//Search API in the MongoDB
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  const data = await player.find({
    $or: [
      { name: { $regex: req.params.key } },
      { nation: { $regex: req.params.key } },
      // { age: { $regex: req.params.key } },
    ],
  });
  res.send(data);
  console.log(data);
});

//for searching teh age as well using the key in the mongo DB
/*
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  const searchKey = req.params.key;

  // Check if the searchKey is a number
  const isNumber = !isNaN(searchKey);

  // Create a filter object based on whether the searchKey is a string or a number
  const filter = {
    $or: [
      { name: { $regex: searchKey, $options: "i" } },
      { nation: { $regex: searchKey, $options: "i" } },
    ],
  };

  // If the search key is a number, add the age condition
  if (isNumber) {
    filter.$or.push({ age: parseInt(searchKey) });
  }

  const data = await player.find(filter);
  res.send(data);
  console.log(data);
});
*/
app.listen(5000);
console.log("App listening at", PORT);
