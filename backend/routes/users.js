const express = require('express')
const router = express.Router();
const { getUserInfo } = require('../modules/users-module')

router.get('/', async (req, res) => {
	const result = await getUserInfo();

	res.status(200).json(result);
})