const express = require("express");

const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.get("/", employeeController.getAll);

router.post("/", employeeController.save);

router.delete("/:id", employeeController.deleteById);

module.exports = router;
