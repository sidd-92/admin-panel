const AWS = require("aws-sdk");

const config = new AWS.Config({
  region: "ap-south-1",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
});
const ses = new AWS.SES(config);

function verifyEmail(email) {
  const params = { EmailAddress: email };
  var verifyEmailPromise = ses.verifyEmailIdentity(params).promise();
  verifyEmailPromise
    .then(function (data) {
      console.log("Email verification initiated", data);
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });
}

module.exports = verifyEmail;
