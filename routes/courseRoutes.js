const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/checkCourse', (req, res) =>{
	courseController.checkCourseExists(req.body)
	.then(resultfromController => res.send(resultfromController))
});

module.exports = router;