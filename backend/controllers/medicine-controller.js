const Medicines = require("../models/medicine-model");

const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicines.find({});
    res.json({
      success: true,
      message: "Medicines data retrieved successfully",
      medicines,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrieve medicines data",
    });
  }
};

const addMedicines = async (req, res) => {
  const { name, type, price, stock, expiry, manufacturer, status} = req.body;

  try {
    await Medicines.create({
      name,
      type,
      price,
      stock,
      expiry,
      manufacturer,
      status
    }).then(() =>
      res.json({
        success: true,
        message: "Medicines data added successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add medicines",
      serverMessage: error,
    });
  }
};

const deleteMedicines = async (req, res) => {
  const { _id } = req.query;
  try {
    await Medicines.findByIdAndDelete(_id).then(() =>
      res.json({
        success: true,
        message: "Medicines data deleted successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete medicines data",
      error: error,
    });
  }
};


const EditMedicines = async (req, res) => {
  const { id, name, type, price, stock, expiry, manufacturer, status} = req.body;

  try {
    await Medicines.findByIdAndUpdate(id, {
      name,
      type,
      price,
      stock,
      expiry,
      manufacturer,
      status
    }).then(() =>
      res.json({
        success: true,
        message: "Medicines data updated successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update medicines",
      serverMessage: error,
    });
  }
};



module.exports = {
    getAllMedicines,
    addMedicines,
    deleteMedicines,
    EditMedicines
};