import mongoose from "mongoose";

let PatientSchema = new mongoose.Schema({
    name: { type: String },
    age:  { type: Number },
    gender: { type: String },
    bloodGroup: { type: String },
    phone: { type: String },
    email: { type: String },
});

let Patients = mongoose.model("patients", PatientSchema);

export default Patients;