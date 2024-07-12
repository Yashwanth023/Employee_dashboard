const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    f_Id: { type: Number, required: true },
    f_Image: { type: String, required: true },
    f_Name: { type: String, required: true },
    f_Email: { type: String, required: true },
    f_Mobile: { type: String, required: true },
    f_Designation: { type: String, required: true },
    f_Salary: { type: Number, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
