import Appointment from "../models/appointment-model.js";

// API to get All Dashboard
const getDashboard = async (req, res) => {
  try {
    const appointmentList = await Appointment.find({});
    const appointment = appointmentList?.length;
    const patientsList = await find({});
    const patients = patientsList?.length;
    const MedicinesList = await _find({});
    const medicines = MedicinesList?.length;
    const educationContents = await __find({});
    const education = educationContents?.length;
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

export default getDashboard;
