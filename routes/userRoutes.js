const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')

router.post('/checkEmail', (req, res) =>{
	userController.checkEmailExists(req.body)
	.then(resultfromController => res.send(resultfromController))
});

module.exports = router;