const express = require("express");
const router = express.Router();
const {
  getTables,
  addTable,
  editTable,
  deleteTable,
} = require("../controllers/TableController");

router.get("/", getTables);
router.post("/", addTable);
router.put("/:id", editTable);
router.delete("/:id", deleteTable);

module.exports = router;
