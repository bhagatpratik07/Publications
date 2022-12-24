const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// routes
app.get("/", require("./routes/publications"));

app.listen(3001, async () => {
  console.log("Server started");
});
