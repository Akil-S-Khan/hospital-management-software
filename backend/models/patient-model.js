import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
  gender: { type: String },
  bloodGroup: { type: String },
  phone: { type: String },
  email: { unique: true, type: String },
});

const Patients = mongoose.model("patients", PatientSchema);

export default Patients;
