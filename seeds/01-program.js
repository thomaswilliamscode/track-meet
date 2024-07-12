/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('program').truncate()
  await knex('program').insert([
		{ program_name: 'Full Stack Web Dev' },
		{ program_name: 'Data Science' },
		{ program_name: 'Backend' },
		{ program_name: 'Web3' },
	]);
};
