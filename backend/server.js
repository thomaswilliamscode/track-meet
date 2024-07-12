const express = require('express');
const cors = require('cors');
const knex = require('./database');

const server = express();
const PORT = process.env.PORT || 9000;

//Middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());

// import routes here
const userRouter = require('./routes/users')

// use routes
server.use('/api/users', userRouter)

// test route
server.get('/', (req, res) => {
	res.send('Server is running')
})

// start the server
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})