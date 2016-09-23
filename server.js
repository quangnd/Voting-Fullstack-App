const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('port', process.env.API_PORT || 3001);
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const userRouter = require('./routes/userRoute')();
const authRouter = require('./routes/authRoute')();
app.use('/auth', authRouter);
app.use('/Users', userRouter);

app.listen(app.get('port'), () => {
	 console.log(`Server is running at: http://localhost:${app.get('port')}/`);
});