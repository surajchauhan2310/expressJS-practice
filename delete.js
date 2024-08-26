const dbConnection = require("./mongodb");
const deleteData = async () => {
  const data = await dbConnection();
  const result = await data.deleteMany({
    name: "Suraj",
  });
  console.log(result);
  if (result.acknowledged) {
    console.log("Record deleted successfully");
  } else result.deletedCount == 0;
  console.log("No records present in the database for the deletion process :(");
};
deleteData();
