'use_strict';

const db = require('../db');
const { doc, setDoc } = require("firebase/firestore");
const config = require('../models/member');

const addMember = async (req, res, next) => {
	try {
		const data = req.body;
		console.log('member');
		const member = doc(db, `members/${data.email}`);
		console.log('setting');
		setDoc(member, data);
		res.send('saved');
	} catch (err) {
		res.status(400).send(err.message);
	}
}

module.exports = {
	addMember
}