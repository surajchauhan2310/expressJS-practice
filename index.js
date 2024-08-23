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
const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.join(__dirname, "public");
// console.log(publicPath);
//It will goint to load the static content from the 'publicPath'
app.use(express.static(publicPath));

app.listen(4500);
