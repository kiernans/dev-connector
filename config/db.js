const mongoose = require('mongoose');
const keys = require('./keys');
const db = keys.mongoURI;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.log('DID NOT CONNECT TO MONGODB');
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
