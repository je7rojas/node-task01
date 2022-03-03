const express = require("express");

//Routers
//prueba inicial
//Utils

const { sequelize } = require("./util/database");

//Init express app
const app = express();

// 2** -> success
// 3** -> miscellaneous
// 4** -> client error
// 5** -> server error

app.get("/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users: users
    }
  });
});

//database conection
sequelize
  .authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("Express app running 2.0");
});
