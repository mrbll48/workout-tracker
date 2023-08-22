const jwt = require("jsonwebtoken");

const secret = "supersecretsd;lkdj;ckbjcxc;kvjb;sdflkfgj;lkjsdfg";
const expiration = "2h";

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
