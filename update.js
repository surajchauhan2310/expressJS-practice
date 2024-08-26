const dbConnection = require("./mongodb");

const updateData = async () => {
  let data = await dbConnection();
  let result = await data.updateMany(
    { name: "Toure" },
    { $set: { name: "Toure", nationality: "Ivory Coast" } }
  );
  console.log(result);

  //   return data;
};
updateData();
