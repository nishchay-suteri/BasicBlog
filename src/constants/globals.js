const dotenv = require("dotenv");

dotenv.config();

const DEFAULT_PORT = 3000;
const TWO_HOURS = 1000 * 60 * 60 * 2;
const DEFAULT_ENV = "development";
const DEFAULT_SESSION_NAME = "sessionId"; // We can remove this, just added to check
const DEFAULT_SESS_SECRET = "mySecret"; // We can remove this, just added to check

const SERVER_PORT = process.env.PORT || DEFAULT_PORT;
const SESS_LIFETIME = Number(process.env.SESS_LIFETIME || TWO_HOURS);
const NODE_ENV = process.env.NODE_ENV || DEFAULT_ENV;
const SESSION_NAME = process.env.SESSION_NAME || DEFAULT_SESSION_NAME;
const SESS_SECRET = process.env.SESSION_SECRET || DEFAULT_SESS_SECRET;
const DB_URI = process.env.DB_URI;

const IN_PROD = NODE_ENV === "production";

module.exports = {
  SERVER_PORT,
  SESS_LIFETIME,
  IN_PROD,
  SESSION_NAME,
  SESS_SECRET,
  DB_URI,
};
