// first we need to set up the server boilerplate-  express?
// imports (what do we need for this file?)- express, inqquirer, json?
// middleware (same as most projects)- json only?
// app.use(express.json())
// html routes (how to serve the two html files?)
// server listening (port and callback function)

// we need to set up the crud operations
// writeToFile, readFromFile, deleteFromFile
// using fs

// then we need to set up the routes (from instructions)
// implement the crud operations based on the request.

// base node modules
const fs = require("fs");
const util = require("util");
const path = require("path");

// express specific
// these three lines will always be the same
const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3001;

// fs functions
const readFromFile = util.promisify(fs.readFile);

// middleware
app.use(express.static("public"));
app.use(express.json());

// API ROUTES
app.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => {
    //reading the data from the json file
    res.json(JSON.parse(data));
  }); //this is sending the data from the json file back
});

app.post("/api/notes", (req, res) => {
  const data = (fs.readFromFile('./db/db.json', 'utf-8'));// we can't just write to the file, we need to read the file first
  // so, read the file, save the array to a variable
  const notes = data ? JSON.parse(data) : [];
  // then, we need to push the new note to the variable
  // then, we need to write to the file
  res.json(notes);

  // then we need to respond with some sort of confirmation
});

// HTML SERVED FROM VIEWS AS ROUTES
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "views/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
