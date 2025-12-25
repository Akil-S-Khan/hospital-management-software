const { mongoose, Model} = require("mongoose");

const DoctorSchema = new mongoose.Schema({
      name: {type: String},
      age: {type: Number},
      designation: {type: String},
      phone: {type: String},
      description:{type:String},
});

const Doctors = mongoose.model("doctors", DoctorSchema);

module.exports = Doctors;