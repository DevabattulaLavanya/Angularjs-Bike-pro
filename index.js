const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


	app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

Bike = require('./models/bike');

// // Connect to Mongoose
// mongoose.connect('mongodb://localhost:27017/bikestore');

mongoose.connect('mongodb://hussain:inazumaHussain8@ds119171.mlab.com:19171/testingnode');
// var db = mongoose.connection;
                
app.get('/', (req, res) => {
	res.send('Please use /api/bike');
});
app.get('/api/bike', (req, res) => {
	Bike.getBike((err, bikes) => {
		if(err){
			throw err;
		}
		res.json(bikes);
	});
});

app.get('/api/bike/:_id', (req, res) => {
	Bike.getBikeId(req.params._id, (err, bike) => {
		if(err){
			throw err;
		}
		res.json(bike);
	});
});

app.post('/api/bike', (req, res) => {
	var bike = req.body;
	Bike.addBike(bike, (err, bike) => {
		if(err){
			throw err;
		}
		res.json(bike);
	});
});

app.put('/api/bike/:_id', (req, res) => {
	var id = req.params._id;
	var bike = req.body;
	Bike.updateBike(id, bike, {}, (err, bike) => {
		if(err){
			throw err;
		}
		res.json(bike);
	});
});

app.delete('/api/bike/:_id', (req, res) => {
	var id = req.params._id;
	Bike.removeBike(id, (err, bike) => {
		if(err){
			throw err;
		}
		res.json(bike);
	});
});


app.listen(4000);
console.log('Running on port 4000...');
