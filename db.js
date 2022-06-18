const { initializeApp } = require('firebase/app');
const config = require('./config');
const { getFirestore } = require('firebase/firestore/lite');


const app  = initializeApp(config.firebaseConfig);
const db = getFirestore(app);

module.exports = db;
