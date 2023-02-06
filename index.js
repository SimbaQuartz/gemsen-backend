const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");

const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(routes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://gemsen:gemsen123@cluster0.9ku711l.mongodb.net/gemsen",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    const port = 5005;
    const hostUrl = "192.168.29.75";
    return app.listen(port, () => {
      console.log(`Server listening on port  ${port}`);
      console.log("mongo COnnected");
    });
  })
  .catch((err) => console.log(err));
