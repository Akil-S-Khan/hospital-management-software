import Patients from "../models/patient-model.js";

// GET all patients
const getAllPatient = async (req, res) => {
  try {
    const patients = await Patients.find({});

    res.status(200).json({
      success: true,
      message: "Patient data retrieved successfully",
      data: patients
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve patient data",
      error: error.message
    });
  }
};

// ADD patient
const AddPatients = async (req, res) => {
  try {
    const { name, age, gender, bloodGroup, phone, email } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, phone and email are required"
      });
    }

    const patient = await Patients.create({
      name,
      age,
      gender,
      bloodGroup,
      phone,
      email
    });

    res.status(201).json({
      success: true,
      message: "Patient data added successfully",
      data: patient
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add patient data",
      error: error.message
    });
  }
};

// UPDATE patient
const UpdatePatients = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPatient = await Patients.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Patient data updated successfully",
      data: updatedPatient
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update patient data",
      error: error.message
    });
  }
};

// DELETE patient
const DeletePatients = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPatient = await Patients.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Patient data deleted successfully",
      data: deletedPatient
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete patient data",
      error: error.message
    });
  }
};

export {
  getAllPatient,
  AddPatients,
  UpdatePatients,
  DeletePatients
};
