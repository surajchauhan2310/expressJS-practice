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

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/Barcelona");
  const playerSchema = new mongoose.Schema(
    {
      name: String,
      age: Number,
    },
    {
      collection: "Barca_A",
    }
  );

  const playerModel = mongoose.model("Barca_A", playerSchema);
  let data = new playerModel({ name: "Alba", age: 16 });
  let result = await data.save();
  console.log(result);
};
main();
