import Patient from "../models/patient-model.js";
// API to get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
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
    await create({
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
    await findByIdAndDelete(_id).then(() =>
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
    await findByIdAndUpdate(id, {
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

export { getAllPatients, AddPatients, DeletePatients, EditPatients };
