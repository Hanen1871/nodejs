const mongoose = require("mongoose")
const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,  
    email:{
        type: String,
        required: true    
    } ,
    subjects: [String],   
})     
const studentsModel =mongoose.model("students", studentsSchema)   
module.exports = studentsModel