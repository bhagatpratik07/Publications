const db = require("../config/db");

const getAllPublications = async (req, res, next) => {
  await db.query("SELECT * FROM studentpublications", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { getAllPublications };
