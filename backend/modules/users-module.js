const db = require('../database');

const getUserInfo = async () => {
	const res = await db('users as u')
		.join('role as r', 'u.role', 'r.id')
		.join('program as p', 'u.program', 'p.id')
		.select('u.first_name', 'u.last_name', 'p.program_name', 'u.sprint', 'u.points', 'r.role_name')

		return res;
	
}

module.exports = {
	getUserInfo,
}
