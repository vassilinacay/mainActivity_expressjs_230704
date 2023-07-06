// load express fpr put backend
const express = require('express')
const mongoose = require('mongoose')
//allows us to control the app;s Croos Origin Resource Sharing
const cors = require('cors')

//const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
//we create an app variable that stores results of the express function that initializes our express application and allow to access different methods that will make backend creation easy

mongoose.connect('mongodb+srv://admin:inacay123@sandbox.hvn1x6n.mongodb.net/an22_sample_database?retryWrites=true&w=majority' ,{
		useNewURLParser: true,
		useUnifiedTopology: true
	});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//allows us to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// define the /users string to be included for all users routes defined in the 'user' route file
//app.use('/users', userRoutes);
app.use('/course',courseRoutes);

app.listen(process.env.PORT || 4000, () =>{
	console.log(`Server Running on Localhost: ${ process.env.PORT || 4000}`);
})

