import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./utils/connectDB.js";
import PatientRouter from "./routes/patient-routes.js"

dotenv.config();
const app = express();

// this two command use to store data in mongo atlas
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


app.listen(PORT, () => {
    console.log(`Welcome to the app listening on port http://localhost:${PORT}`);
});
