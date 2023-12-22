import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  value: mongoose.Schema.Types.Mixed, // This can be a string or an array of strings
});

const UserFormSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
  responses: [ResponseSchema], // This should be an array
});

const UserForm = mongoose.model("UserForm", UserFormSchema);
export default UserForm;
