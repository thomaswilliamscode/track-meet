/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('role').truncate()
  await knex('role').insert([
		{ role_name: 'admin' },
		{ role_name: 'authorized' },
		{ role_name: 'restricted' },
		{ role_name: 'blocked' },
	]);
};
