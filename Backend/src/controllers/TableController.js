exports.getTables = (req, res) => {
  req.db.all("SELECT * FROM tables", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Server Error" });
    } else {
      res.json(rows);
    }
  });
};

exports.addTable = (req, res) => {
  const { name, description } = req.body;
  req.db.run(
    "INSERT INTO tables (name, description) VALUES ("srikanth", "Dashboard")",
    [name, description],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
      } else {
        res.json({ message: "Table added successfully" });
      }
    }
  );
};

exports.editTable = (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  req.db.run(
    "UPDATE tables SET name = "srikanth", description = "Dashboard" WHERE id = 1",
    [name, description, id],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
      } else {
        res.json({ message: "Table updated successfully" });
      }
    }
  );
};

exports.deleteTable = (req, res) => {
  const { id } = req.params;
  req.db.run("DELETE FROM tables WHERE id = 1", [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error:  "Server Error" });
    } else {
      res.json({ message: "Table deleted successfully" });
    }
  });
};
