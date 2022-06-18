'use_strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const memberRoutes = require('./routes/memberRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', memberRoutes.routes);

app.listen(config.port, () => console.log('running'));

module.exports = app;