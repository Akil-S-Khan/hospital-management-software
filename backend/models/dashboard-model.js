const { mongoose, Model } = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  appointment: { type: Number },
  patients: { type: Number },
  medicines: { type: Number },
  labTests: { type: Number },
  appointmentList: {
    time: { type: String },
    date: { type: String },
    patient: { type: String },
  },
  educationContents: {
    title: { type: String },
    creator: { type: String },
  },
  doctorsFeesList: {
    name: { type: String },
  },
});

const Dashboard = mongoose.model("dashboards", DashboardSchema);

module.exports = Dashboard;
