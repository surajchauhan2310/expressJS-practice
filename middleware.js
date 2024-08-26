module.exports = reqFilter = (req, res, next) => {
  console.log("reqFilter");
  if (!req.query.age) {
    res.send("Please provide the valid age");
  } else if (req.query.age > 18) {
    res.send("Welcome to the content :)");
  } else if (req.query.age < 18) {
    res.send("Oops! you are not allowed to enter this site :( ");
  } else {
    next();
  }
  next();
};
