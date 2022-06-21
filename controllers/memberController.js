'use_strict';

const db = require('../db');
const { collection, query, orderBy, limit, doc } = require("firebase/firestore");
const config = require('../models/member');

const addMember = async (req, res, next) => {
	try {
		const data = req.body;
		const member = await db.collection('members').doc(data.email).set(data);
		res.send('saved');
	} catch (err) {
		res.status(400).send(err.message);
	}
}

module.exports = {
	addMember
}