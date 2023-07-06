const Course = require('../models/course');

/*
	Check if the email is already exists
	Steps:
		- use mongoose 'find' method to find duplicate emails
		- use the 'then' method to send a response back to the frontend application bassed on the result
*/

module.exports.checkCourseExists = (reqBody) => {
	//the result is sent back to the frontend via the 'then' method found in the route file
	return Course.find({courseId : reqBody.courseId})
			.then(result => {
				// the find method returns a record if a match is found
				if(reqBody.courseId > 8) {
					return true;
					// no duplication email found
					// the user is not yet registered in the database
				} else {
					return false;
				}
			})
}