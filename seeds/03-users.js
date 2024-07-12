/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
		{
			first_name: 'Thomas',
			last_name: 'Williams',
			program: 1,
			sprint: 15,
			points: 100,
			role: 1,
		},
		{
			first_name: 'Jess',
			last_name: 'Williams',
			program: 2,
			sprint: 10,
			points: 150,
			role: 2,
		},
		{
			first_name: 'Ruby',
			last_name: 'Williams',
			program: 3,
			sprint: 5,
			points: 10,
			role: 3,
		},
		{
			first_name: 'Abigail',
			last_name: 'Williams',
			program: 4,
			sprint: 1,
			points: 2,
			role: 4,
		},
	]);
};
