const Patients = require("../models/patient-model");

// API to get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patients.find({});
    res.json({
      success: true,
      message: "Patients data retrived successfully",
      patients,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive patients data",
    });
  }
};

// API to add new patient
const AddPatients = async (req, res) => {
  const { name, age, gender, bloodGroup, phone, email } = req.body;

  try {
    await Patients.create({
      name,
      age,
      gender,
      bloodGroup,
      phone,
      email,
    }).then(() =>
      res.json({
        success: true,
        message: "Patients data added successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add patients",
      serverMessage: error,
    });
  }
};

// API to delete patient
const DeletePatients = async (req, res) => {
  const { _id } = req.query;
  try {
    await Patients.findByIdAndDelete(_id).then(() =>
      res.json({
        success: true,
        message: "Patients data deleted successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete patients data",
      error,
    });
  }
};

// API to update patient
const EditPatients = async (req, res) => {
  const { id, name, age, gender, bloodGroup, phone, email } = req.body;

  try {
    await Patients.findByIdAndUpdate(id, {
      name,
      age,
      gender,
      bloodGroup,
      phone,
      email,
    }).then(() =>
      res.json({
        success: true,
        message: "Patients data updated successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update patients",
      serverMessage: error,
    });
  }
};

module.exports = { getAllPatients, AddPatients, DeletePatients, EditPatients };
