const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const config = require('./config');


const app  = initializeApp(config.firebaseConfig);
const db = getFirestore();

module.exports = db;
