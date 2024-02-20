const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;

  const error = [];

  if (title == null) {
    error.push({ field: "title", message: "The field 'title' is required" });
  } else if (title.length >= 255) {
    error.push({ field: "title", message: "too long, max 254 characters" });
  }
  if (director == null) {
    error.push({
      field: "director",
      message: "The field 'director' is required",
    });
  }
  if (year == null) {
    error.push({
      field: "year",
      message: "The field 'year' is required",
    });
  }
  if (color == null) {
    error.push({
      field: "color",
      message: "The field 'color' is required",
    });
  }
  if (duration == null) {
    error.push({
      field: "duration",
      message: "The field 'duration' is required",
    });
  }
  if (error.length) {
    res.status(422).json({ validationErrors: error });
  } else {
    next();
  }
};

const validateMovieId = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;

  const error = [];

  if (title == "") {
    error.push({
      field: "title",
      message: "The field 'title' is required otherwise delete the line",
    });
  } else if (title != null && title.length >= 255) {
    error.push({ field: "title", message: "too long, max 254 characters" });
  }

  if (director == "") {
    error.push({
      field: "director",
      message: "The field 'director' is required otherwise delete the line",
    });
  }
  if (year == "") {
    error.push({
      field: "year",
      message: "The field 'year' is required otherwise delete the line",
    });
  }

  if (color != "0" && color != "1") {
    error.push({ field: "color", message: "need to be 0 or 1" });
  }

  if (duration == "") {
    error.push({
      field: "duration",
      message: "The field 'duration' is required otherwise delete the line",
    });
  }

  if (error.length) {
    res.status(422).json({ validationErrors: error });
  } else {
    next();
  }
};

module.exports = { validateMovie, validateMovieId };
