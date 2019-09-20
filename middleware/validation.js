const validateBody = (req, res, next) => {
  const { body } = req;

  if (!body.username || !body.password) {
    res
      .status(400)
      .json({ message: "You must provide a valid username and password" });
  } else {
    next();
  }
};

module.exports = {
  validateBody
};
