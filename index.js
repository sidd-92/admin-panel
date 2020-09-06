require("dotenv").config(); // Configure dotenv to load in the .env file
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const Post = require("./models/Post");
const bcrypt = require("bcrypt");
const uuidv1 = require("uuid/v1");
const sendResetLink = require("./sendEmail");
const verifyEmail = require("./verifyEmail");

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

app.post("/forgot", (req, res) => {
  if (req.body.email) {
    const id = uuidv1();
    //verifyEmail(req.body.email);
    sendResetLink(req.body.email, id);
  }
  res.status(200).json({ message: "Email Has been Sent" });
});

app.patch("/reset", (req, res) => {
  let user = {};
  if (req.query.id && req.query.email) {
    bcrypt.hash(req.body.password, 10).then((hashed) => {
      res.status(200).json({
        user: {
          password: hashed,
          email: req.query.email,
        },
      });
    });
  } else {
    res.status(400).json({ message: "QUERY PARAM (id and email) required" });
  }
});

app.get("/", (req, res) => {
  res.send("API Is Working");
});

app.listen(PORT, () => console.log("http://localhost:" + PORT));
