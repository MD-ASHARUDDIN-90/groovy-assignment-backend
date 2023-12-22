//form title
//form inputs an array of objects containing necessary information
//  input type , input name ,  minLength , maxLength , isRequired , regexValidations

import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  inputs: [
    {
      type: {
        type: String,
        enum: [
          "text",
          "password",
          "radio",
          "checkbox",
          "email",
          "textarea",
          "date",
        ],
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      regexValidations: String,
      isRequired: {
        default: false,
        type: Boolean,
      },
      minLength: Number,
      maxLength: Number,
      textAreaLimit: Number,
      options: [optionSchema],
    },
  ],
});

const Form = mongoose.model("Form", formSchema);
export default Form;
