import { mongoose } from "mongoose";

const EducationContentSchema = new mongoose.Schema({
  title: { type: String },
  createdBy: { type: String },
  description: { type: String },
});

const EducationContent = mongoose.model("educations", EducationContentSchema);

export default EducationContent;
