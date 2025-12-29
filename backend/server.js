import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import ConnectDb from "./utils/connectDB.js";
import PatientRouter from "./routes/patient-routes.js";
import DoctorRouter from "./routes/doctors-routes.js";


dotenv.config();
const app = express();

// 🔴 CHANGED: CORS enable for frontend
app.use(cors({
  origin: "http://localhost:5173"
}));

// used to read data of json format
//when we sent json body from frontend to api
// this two command use to store data in mongo 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

console.log("ENV PORT:", process.env.PORT);


ConnectDb(DATABASE_URL);

app.get("/", (req, res) => {
    res.send("Welcome to Hospital Management System");
});

app.use("/api", PatientRouter);
app.use("/api", DoctorRouter); 

app.listen(PORT, () => {
    console.log(`Welcome to the app listening on port http://localhost:${PORT}`);
});
