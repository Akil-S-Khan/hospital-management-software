const Appointment = require("../models/appointment-model");

// API to get all   Appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find({});
    res.json({
      success: true,
      message: "Appointment fetched successfully",
      appointment,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive appointment",
      error: error
    });
  }
};

const AddAppointments = async (req,res) => {
 const{name,age,time,date,fee,description} = req.body

try {
  await Appointment.create({
    name,
    age,
    date,
    time,
    fee,
    description,
  }).then(()=>{
    res.json({
      sucess:true,
      message:"Appointment Aded sucessfully",
    })
  })
  
} catch (error) {
  res.json({
    sucess:false,
    message:"Faild to Add appointment",
    err: error
  })
}

}


const DeleteAppointments = async (req, res) => {
  const { _id } = req.query;
  try {
    await Appointment.findByIdAndDelete(_id).then(() =>
      res.json({
        success: true,
        message: "Appointments  deleted successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to delete appointmnets",
      error:error.message,
    });
  }
};

const EditAppointments = async (req, res) => {
  const { id, name, age, time,date,fee,description } = req.body;

  try {
    await Appointment.findByIdAndUpdate(id, {
      name,
      age,
      time,
      date,
      fee,
      description,
    }).then(() =>
      res.json({
        success: true,
        message: "Appointment updated successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to update Appointmnets",
      serverMessage: error,
    });
  }
};

module.exports={getAllAppointments,AddAppointments,DeleteAppointments,EditAppointments}