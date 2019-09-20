const db = require("../database/dbConfig.js");

const findBy = filter => {
  return db("users")
    .where({ filter })
    .first();
};

module.exports = {
  findBy
};
