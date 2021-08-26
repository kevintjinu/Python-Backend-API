const express = require("express");
require("./db/mongoose");
const lightRouter = require("./routes/light");
const connectDB = require("./db/mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();
connectDB();
const port = process.env.PORT;

app.use(express.json());
app.use(lightRouter);
//app.use(taskRouter);

app.listen(port, () => {
  console.log("Wakey Wakey kk, Server is running on " + port);
});