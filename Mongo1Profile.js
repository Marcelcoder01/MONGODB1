const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfbirth: String,
    Comments: String,
    rol: String,

})


module.exports = mongoose.model("Profile", profileSchema)   