const dbConnection = require("./mongodb");

const insertData = async () => {
  const db = await dbConnection();
  //   console.log(db);
  const data = await db.insertMany([
    {
      name: "Valdes",
      age: 19,
      nationality: "ESP",
    },
    {
      name: "Keita",
      age: 16,
      nationality: "Cameroon",
    },
  ]);
  if (data.acknowledged) {
    console.log("Data has been added succesfully!");
  }
  //   console.log(data);
};
insertData();
