import express  from "express";
import { availability,getAvailability} from "../controllers/Professor_Auth";
const router = express.Router();


router.post("/professor/:id",availability);
router.get("/professor/:id",getAvailability);

export default router;

