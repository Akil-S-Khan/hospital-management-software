const { mongoose, Model } = require("mongoose");

const MedicineSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  price: { type: String },
  stock: { type: String },
  expiry: { type: String },
  manufacturer: { type: String },
  status: { type: String },
});

const Medicines = mongoose.model("medicines", MedicineSchema);

module.exports = Medicines;

