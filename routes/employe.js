const express = require("express");
const router = express.Router();
const { isSignedin } = require("../middleware/index");

const {
  getEmpData,
  createEmpData,
  UpdateEmpData,
  deleteEmpData,
} = require("../controller/employe");

router.get("/", isSignedin(), getEmpData());

router.post("/", isSignedin(), createEmpData());
router.patch("/", isSignedin(), UpdateEmpData());
router.delete("/", isSignedin(), deleteEmpData());

module.exports = router;
