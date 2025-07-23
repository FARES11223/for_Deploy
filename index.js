const express = require("express");
require("dotenv").config();
require("./DB/connection");
const tasks = require("./routes/tasks");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello ,Task Manager App");
});

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;
app.listen(port, () => console.log(`Server Listening on port ${port}`));
