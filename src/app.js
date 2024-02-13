const express = require("express");

const app = express();

app.use(express.json());

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUsersId);

app.post("/api/movies", movieControllers.postMovies);
app.post("/api/users", userControllers.postUsers);

app.put("/api/movies/:id", movieControllers.updateMovies);
app.put("/api/users/:id", userControllers.updateUsers);

app.delete("/api/movies/:id", movieControllers.deleteMovies);
app.delete("/api/users/:id", userControllers.deleteUsers);

module.exports = app;
