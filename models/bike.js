const mongoose = require('mongoose');

// Bike Schema
const bikeSchema = mongoose.Schema({
	bikeName:{
		type: String,
		required: false
	},
	bikecompany:{
		type: String,
		required: false
	},
	geartype:{
		type: String
	},
	price:{
		type: String,
		required: false
	},
	bikeimage:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Bike = module.exports = mongoose.model('Bike', bikeSchema);

// Get Bikes
module.exports.getBike = (callback, limit) => {
	Bike.find(callback).limit(limit);
}

// Get BikeId
module.exports.getBikeId = (id, callback) => {
	Bike.findById(id, callback);
}

// Add Bike
module.exports.addBike = (bike, callback) => {
	Bike.create(bike, callback);
}

// Update Bike
module.exports.updateBike = (id, bike, options, callback) => {
	var query = {_id: id};
	var update = {
		bikeName: bike.bikeName,
		bikecompany: bike.bikecompany,
		geartype: bike.geartype,
		price: bike.price,
		bikeimage: bike.bikeimage
	}
	Bike.findOneAndUpdate(query, update, options, callback);
}

// Delete Bike
module.exports.removeBike = (id, callback) => {
	var query = {_id: id};
	Bike.remove(query, callback);
}
