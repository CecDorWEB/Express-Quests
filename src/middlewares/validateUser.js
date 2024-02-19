const validateUser = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];

  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

const validateUserId = (req, res, next) => {
  const { firstname, lastname, email, city, language } = req.body;
  const errors = [];
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (firstname == "") {
    errors.push({
      field: "firstname",
      message: "The field 'firstname' is required otherwise delete the line",
    });
  }
  if (lastname == "") {
    errors.push({
      field: "lastname",
      message: "The field 'lastname' is required otherwise delete the line",
    });
  }
  if (email == "") {
    errors.push({
      field: "email",
      message: "The field 'email' is required otherwise delete the line",
    });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }
  if (city == "") {
    errors.push({
      field: "city",
      message: "The field 'city' is required otherwise delete the line",
    });
  }
  if (language == "") {
    errors.push({
      field: "language",
      message: "The field 'language' is required otherwise delete the line",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = { validateUser, validateUserId };
