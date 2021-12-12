const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();
app.use(cors())

app.use(router);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(8888, () => {
  console.log("App is running at port 8888...");
  console.log("Please visit http://127.0.0.1:8888");
});
