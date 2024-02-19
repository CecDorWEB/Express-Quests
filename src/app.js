const express = require("express");
const {
  validateMovie,
  validateMovieId,
} = require("./middlewares/validateMovie");
const { validateUser, validateUserId } = require("./middlewares/validateUser");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersId);

app.post("/api/movies", validateMovie, movieControllers.postMovies);
app.post("/api/users", validateUser, userControllers.postUsers);

app.put("/api/movies/:id", validateMovieId, movieControllers.updateMovies);
app.put("/api/users/:id", validateUserId, userControllers.updateUsers);

app.delete("/api/movies/:id", movieControllers.deleteMovies);
app.delete("/api/users/:id", userControllers.deleteUsers);

module.exports = app;
