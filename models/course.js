
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	courseId : {
		type : String,
		required : [true, "Course ID is required"]
	},
	courseName : {
		type : String,
		required : [true, "Course name is required"]
	}
});

module.exports = mongoose.model("Course", courseSchema);