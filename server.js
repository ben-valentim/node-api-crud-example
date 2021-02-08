const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/job.js');
const cors = require('cors');
const db = require('./models/index.js');

const app = express();

db.sequelize.sync();

const corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

app.use('/job', jobRoutes);

app.listen(3000, () => console.log('Application is ready'));