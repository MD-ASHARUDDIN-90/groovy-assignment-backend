import express from "express";
import {
  createForm,
  getAllForms,
  getFormById,
  submitUserResponse,
} from "../../controller/formController/formController.js";

const router = express.Router();

router.get("/", getAllForms);

router.post("/create", createForm);
router.post("/submit", submitUserResponse);
router.get("/:id", getFormById);

export default router;
