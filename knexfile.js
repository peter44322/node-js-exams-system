require("dotenv").config();
module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
  }
};
