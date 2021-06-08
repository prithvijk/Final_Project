const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const accelerometer = require('./routes/acc');
app.use('/accelerometer', accelerometer);

const asp = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/asp.js');
app.use('/asp', asp);

const commandcenter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/commandcenter.js');
app.use('/commandcenter', commandcenter);

const controlcenter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/controlcenter.js');
app.use('/controlcenter', controlcenter);

const ecg = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/ecg.js');
app.use('/ecg', ecg);

const emg = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/emg.js');
app.use('/emg', emg);

const gpssensor = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/gpssensor.js');
app.use('/gpssensor', gpssensor);

const heartratesensor = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/heartratesensor.js');
app.use('/heartratesensor', heartratesensor);

const mongodb = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/mongodb.js');
app.use('/mongodb', mongodb);

const tempetaturesensor = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/tempetaturesensor.js');
app.use('/tempetaturesensor', tempetaturesensor);

const heartRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/heart.js');
app.use('/heart', heartRouter);

const tempRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/temp.js');
app.use('/dtemp', tempRouter);

const dgpsRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/gps.js');
app.use('/dgps', dgpsRouter);

const daccRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/acc1.js');
app.use('/dacc', daccRouter);

const decgRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/ecgsensor.js');
app.use('/decg', decgRouter);

const demgRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/emgsensor.js');
app.use('/demg', demgRouter);

const flagrrRouter = require('/Users/prithvirajjanardhankurapothula/Desktop/project_final/backend/routes/flagCheck.js');
app.use('/flag', flagrrRouter);

const sensorRouter = require('./routes/sensor');
app.use('/sensor', sensorRouter);

const checkRouter = require('./routes/check');
app.use('/check', checkRouter);

const dataSensorRouter = require('./routes/dataSensor');
app.use('/dataSensor', dataSensorRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});