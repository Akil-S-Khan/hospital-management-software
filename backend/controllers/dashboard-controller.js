const Appointment = require("../models/appointment-model");
const Patient = require("../models/patient-model");
const Medicines = require("../models/medicine-model");
const EducationContent = require("../models/education-content");

// API to get All Dashboard
const getDashboard = async (req, res) => {
  try {
    const appointmentList = await Appointment.find({});
    const appointment = appointmentList?.length;
    const patientsList = await Patient.find({});
    const patients = patientsList?.length;
    const MedicinesList = await Medicines.find({});
    const medicines = MedicinesList?.length;
    const educationContents = await EducationContent.find({});
    const education =  educationContents?.length;
    const doctorsFeesList = await Appointment.find({ fee: "Unpaid" });

    res.json({
      success: true,
      massage: "Dashboard data retrived successfully",
      appointment,
      patients,
      medicines,
      labTests: 500,
      appointmentList,
      educationContents,
      education,
      doctorsFeesList,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive dashboard data",
    });
  }
};

module.exports = { getDashboard };
