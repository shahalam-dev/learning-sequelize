const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("sequelize server");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
