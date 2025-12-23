import mongoose from "mongoose";

let Doctors = new mongoose.Schema ({
    name: { type:String },
    qualifications: { type:String },
    specialist: { type:String },
    experience: { type:Number },
    contact: { type:Number },
    email: { type:String},
})

let Doctor = mongoose.model("doctors", Doctors);

export default Doctor;