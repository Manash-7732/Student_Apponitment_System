import express from "express"
import {appoint,delAppointment} from "../controllers/Appointments_auth"
const router = express.Router();

router.post("/appointments",appoint);
router.get("/me",function(req,res){
     res.status(201).json("my name is manash raj")
})
router.delete("/appointments/:id",delAppointment)

export default router;