// ? All Order Related Routes
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const sendResetLink = require("../../sendEmail");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/test", (req, res, next) => {
  return res.status(200).json({
    message: "Test",
  });
});
//Sign Up
router.post("/signup", (req, res, next) => {
  /** Steps
   * 1. First Find Whether Email Already Exists
   * 2. If User Exists Send a Message that Email already Exists
   * 3. Else Create a New User with Email and Hashed PWD
   */

  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email Already Exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log("USER", result);
                res.status(201).json({
                  message: "User Created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.send(401).json({
            message: "Auth Failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userID: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth Sucessfull",
            token: token,
          });
        }
        return res.status(401).json({
          message: "Auth Failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/forgot", (req, res) => {
  if (req.body.email) {
    const id = new mongoose.Types.ObjectId();
    //verifyEmail(req.body.email);
    sendResetLink(req.body.email, id);
  }
  res.status(200).json({ message: "Email Has been Sent" });
});

router.patch("/reset", (req, res) => {
  if (req.query.id && req.query.email) {
    User.find({ email: req.query.email })
      .exec()
      .then((user) => {
        console.log(user);
        if (user.length >= 1) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              User.findByIdAndUpdate(user[0].id, {
                email: req.query.email,
                password: hash,
              })
                .exec()
                .then((result) => {
                  return res.status(200).json({ message: "User Updated" });
                })
                .catch((err) => console.log("Error", err));
            }
          });
        } else {
          res.status(404).json({ message: "Unauthorized" });
        }
      });
  } else {
    res.status(400).json({ message: "QUERY PARAM (id and email) required" });
  }
});

module.exports = router;
