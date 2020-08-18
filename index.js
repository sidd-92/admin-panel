require("dotenv").config(); // Configure dotenv to load in the .env file
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const Post = require("./models/Post");
const router = express.Router();

const app = express();
app.use(fileUpload());
app.use(morgan("dev"));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
const PORT = 3030;
app.post("/newpost", (req, res) => {
  const newPost = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    content: req.body.content,
  });
  newPost
    .save()
    .then((result) => {
      if (result) {
        res.status(201).json({
          message: "Post Created Sucessfully",
          postInfo: {
            title: result.title,
            content: result.content,
            dateCreated: result.dateCreated,
          },
        });
      } else {
        res.status(404).json({
          message: "No Valid Entry Found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

app.get("/", (req, res) => {
  res.send("API Is Working");
});

app.listen(PORT, () => console.log("http://localhost:" + PORT));
