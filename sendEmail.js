const AWS = require("aws-sdk");

const config = new AWS.Config({
  region: "ap-south-1",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
});
const ses = new AWS.SES(config);

function sendResetLink(email, id) {
  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `To reset your password, please click on this link: http://localhost:3000/reset?id=${id}&email=${email}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Reset password instructions",
      },
    },
    Source: "sidfirebaseuser@gmail.com",
  };

  ses.sendEmail(params, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = sendResetLink;
