const app = require('express')();
const bodyParser = require('body-parser');
const {getLocation, postLocation} = require('./controllers');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.get('/api', getLocation);
app.post('/api', postLocation);
app.use((err, req, res, next) => {
	res.status(500).send({err: err.toString()});
});

module.exports = app;
