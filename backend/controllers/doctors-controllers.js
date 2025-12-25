import Doctor from "../models/doctors-models.js";

let getAllDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.find({});

    res.json({
      success: true,
      message: "DOCTOR DATA RETRIEVED SUCCESSFULLY",
      data: doctor,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "DOCTOR DATA RETRIEVED NOT SUCCESSFULLY",
    });
  }
};

let AddDoctor = async (req, res) => {
  let { name, qualifications, specialist, experience, contact, email } =
    req.body;
  console.log("REQ BODY", req.body);

  try {
    await Doctor.create({
      name,
      qualifications,
      specialist,
      experience,
      contact,
      email,
    }).then(() => {
      res.json({
        success: true,
        message: "DOCTOR DATA ADDED SUCCESSFULLY",
      });
    });
  } catch (error) {
    res.json({
      success: false,
      message: "FAILED TO ADDED DOCTOR DATA",
    });
  }
};

let UpdateDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updateDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateDoctor) {
      return res.json({
        success: false,
        message: "DOCTOR NOT FOUND",
      });
    }

    res.json({
      success: true,
      message: "DOCTOR DATA UPDATED SUCCESSFULLY",
      data: updateDoctor,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "FAILED TO UPDATE DOCTOR DATA",
      error: error.message,
    });
  }
};

let DeleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteDoctor = await Doctor.findByIdAndDelete(id, req.body, {
      new: true,
    });

    if (!deleteDoctor) {
      return res.json({
        success: false,
        message: "DOCTOR NOT FOUND",
      });
    }

    res.json({
      success: true,
      message: "DOCTOR DATA DELETE SUCCESSFULLY",
      data: deleteDoctor,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "FAILED TO DELETE DOCTOR DATA",
      error: error.message,
    });
  }
};

export { getAllDoctor, AddDoctor, UpdateDoctor, DeleteDoctor };
