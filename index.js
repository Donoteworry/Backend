const express = require("express"); //Import the express dependency
const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000; //Save the port number where your server will be listening

app.get("/login", (req, res) => {
  res.status(200).json("login");
});

app.get("/register", (req, res) => {
  res.status(200).json("register");
});

app.get("/profile", (req, res) => {
  res.status(200).json("profile");
});

app.get("/addNote", (req, res) => {
  res.status(200).json("login");
});
app.get("/editNote", (req, res) => {
  res.status(200).json("login");
});
app.get("/deleteNote", (req, res) => {
  res.status(200).json("login");
});
app.get("/note", (req, res) => {
  res.status(200).json("login");
});
app.get("/note/:noteId", (req, res) => {
  res.status(200).json("login");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
