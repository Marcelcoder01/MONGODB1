let mongoose = require("mongoose");

let TeachersSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
});

let MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeachersSchema]
});

let Teachers = mongoose.model("Teachers", TeachersSchema);
let Marks = mongoose.model("Marks", MarksSchema)

module.exports = { Teachers, Marks }

