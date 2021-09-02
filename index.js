const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const connectUrl =
  "mongodb+srv://admin-avenger1:ozcmFkaiH0KWJ8F6@cluster0.ofmvr.mongodb.net/movieDB?retryWrites=true&w=majority";

const connect = mongoose
  .connect(connectUrl, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/users", require("./routes/users"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/like", require("./routes/like"));
app.use("/api/favorite", require("./routes/favorite"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
// app.use('/uploads', express.static('uploads'));

// Serve static assets if in production

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App is running");
})
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
