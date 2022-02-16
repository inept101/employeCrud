import express from "express";
const empRoutes = express.Router();
import { isAuth } from "../middleware/index.js";

import {
  getEmpData,
  createEmpData,
  UpdateEmpData,
  deleteEmpData,
} from "../controller/employe.js";

empRoutes.get("/", isAuth, getEmpData);

empRoutes.post("/", isAuth, createEmpData);
empRoutes.patch("/", isAuth, UpdateEmpData);
empRoutes.delete("/", isAuth, deleteEmpData);

export default empRoutes;
