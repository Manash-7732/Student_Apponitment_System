import express from "express";
import dotenv from "dotenv";
import Register from "../routes/Register"
import Availabilility_Route from "../routes/Availability_Route"
import Appointment from "../routes/Appointment"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/register",Register);
app.use("/availability",Availabilility_Route)
app.use("/appoints",Appointment)


app.get("/", function (req, res) {
  res.send("My name is manash raj");
});

app.listen(port);
