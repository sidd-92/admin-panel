require("dotenv").config(); // Configure dotenv to load in the .env file
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const Post = require("./models/Post");
var aws = require("aws-sdk");
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
/* 
// Configure aws with your accessKeyId and your secretAccessKey
aws.config.update({
  region: "ap-south-1", // Put your aws region here
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const S3_BUCKET = process.env.bucket;
app.post("/uploadImage", (req, res) => {
  console.log("REQUEST", req);
  // Binary data base64
  const fileContent = Buffer.from(req.files.uploadedFileName.data, "binary");
  const title = req.body.title;
  const s3 = new aws.S3(); // Create a new instance of S3
  // Set up the payload of what we are sending to the S3 api
  var filename = req.files.uploadedFileName.mimetype;
  var ext = filename.substring(filename.indexOf("/") + 1);
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: `${title}.${ext}`,
    Expires: 500,
    ContentType: req.files.uploadedFileName.mimetype,
    Body: fileContent,
    ACL: "public-read",
  };

  // Uploading files to the bucket
  s3.upload(s3Params, function (err, data) {
    if (err) {
      throw err;
    }
    res.send({
      response_code: 200,
      response_message: "Success",
      response_data: data,
    });
  });
});
 */
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
