'use_strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
	PORT,
	HOST,
	HOST_URL,
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_ID,
	MESSAGING_SENDER_ID,
	APP_ID,
	MEASUREMENT_ID,
} = process.env;

module.exports = {
	port: PORT,
	host: HOST,
	url: HOST_URL,
	firebaseConfig: {
		apiKey: API_KEY,
		authDomain: AUTH_DOMAIN,
		projectId: PROJECT_ID,
		storageBucket: STORAGE_ID,
		messagingSenderId: MESSAGING_SENDER_ID,
		appId: APP_ID,
		measurementId: MEASUREMENT_ID,
	}
}