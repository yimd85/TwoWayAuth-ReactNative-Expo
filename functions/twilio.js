const twilio = require('twilio');

const accountSid = THEKEY;
const authToken = THEKEY;

module.exports = new twilio.Twilio(accountSid, authToken);
