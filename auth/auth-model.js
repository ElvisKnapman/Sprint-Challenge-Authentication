const db = require("../database/dbConfig.js");

const findBy = filter => {
  return db("users")
    .where(filter)
    .first();
};

const insertUser = newUser => {
  return db("users")
    .insert(newUser, "id")
    .then(([id]) => {
      console.log("id", id);
      return findBy({ id });
    });
};

module.exports = {
  findBy,
  insertUser
};
