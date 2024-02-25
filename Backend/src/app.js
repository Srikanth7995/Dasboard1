const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const tableRoutes = require("./routes/tableRoutes");
const sqlite3 = require("sqlite3").verbose(); // Import the sqlite3 package

// Connect to the SQLite database
const db = new sqlite3.Database("../database/mydatabase.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database");
  }
});

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/tables", tableRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
