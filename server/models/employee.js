const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstname: { type: String, required: true },

  lastname: String,

  gender: String,

  email: String,

  dob: String,

  phone: String,

  education: String,

  hobbies: [String],
},{
  versionKey: false,
});

module.exports = mongoose.model("Employees", employeeSchema);
