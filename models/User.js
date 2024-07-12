const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    f_sno: { type: Number, required: true },
    f_userName: { type: String, required: true },
    f_Pwd: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
