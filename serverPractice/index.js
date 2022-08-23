const express = require("express");
require("dotenv").config();
const app = express();
const dbConnection = require("./database/auth");
const authRouter = require("./routes/routes");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

dbConnection();
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
