import express from "express";
import { professor,student,stu, prof } from "../controllers/Register_auth";
const router = express.Router();


router.post("/student",student);
router.post("/professor",professor);
router.get("/students/:id/appointments",stu)
router.get("/professor/:id/appointments",prof)

export default router;