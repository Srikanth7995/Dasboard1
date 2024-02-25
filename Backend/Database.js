const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
    db.run(`CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT,
      role TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS Plugins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
      // Define other plugin fields as needed
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS Data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      // Define data fields
    )`);
  }
});

module.exports = db;
