const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();

const app = express();
const userRoute = require("./routes/user");
const authRoute=require("./routes/auth")
const productRoute = require("./routes/product");
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products",productRoute)



app.listen(process.env.port, async (req, res) => {
     try {
          await connection;
          console.log("Connected to db");
     } catch (error) {
          console.log("error", error);
     }
     console.log(`working on ${process.env.port}`);
});
