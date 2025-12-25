const Doctors = require("../models/doctor-model");

// API to get All Doctors
const getAllDoctors = async (req, res) => {
try {
      const doctors = await Doctors.find({});
      res.json({
            success: true,
            massage: "Doctors data retrived successfully",
            doctors,
      });
} catch (error) {
res.json({
      success: false,
      message: "Failed to retrive doctors data",
});
};
};

// API to add new Doctors
const AddDoctors = async (req, res) => {
  const { name, age, designation,  phone,description } = req.body;

  try {
    await Doctors.create({
      name,
      age,
      designation,
      phone,
      description,
    }).then(() =>
      res.json({
        success: true,
        message: "Doctors data added successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add doctors",
      serverMessage: error,
    });
  }
};
// API to delete doctors
const DeleteDoctors = async (req, res) => {
  const { _id } = req.query;
  try {
    await Doctors.findByIdAndDelete(_id).then(() =>
      res.json({
        success: true,
        message: "Doctors data deleted successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete doctors data",
      error,
    });
  }
};

// API to Update Doctors
const EditDoctors = async (req, res) => {
  const { id, name, age, designation, phone,description } = req.body;

  try {
    await Doctors.findByIdAndUpdate(id, {
      name,
      age,
      designation,
      phone,
      description,
    }).then(() =>
      res.json({
        success: true,
        message: "Doctors updated successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update doctors",
      serverMessage: error,
    });
  }
};

module.exports = {getAllDoctors, AddDoctors,DeleteDoctors, EditDoctors}