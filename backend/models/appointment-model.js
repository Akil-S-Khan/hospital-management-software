const { mongoose } = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  time: { type: String },
  date: { type: String },
  name: { type: String },
  age: { type: String },
  fee: { type: String },
 description: {type: String},
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
