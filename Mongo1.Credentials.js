const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
    adress: String,
    phone: Number,
    email: String,
    

})

module.exports = mongoose.model("Credentials", credentialsSchema)   