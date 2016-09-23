const express = require('express');
const mongodb = require('mongodb').MongoClient;
const foreman

const app = express();

app.set('port', process.env.API_PORT || 3001);

app.listen(app.get('port'), () => {
	 console.log(`Server is running at: http://localhost:${app.get('port')}/`);
});