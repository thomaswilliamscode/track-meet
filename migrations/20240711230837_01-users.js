/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema

		.createTable('program', (table) => {
			table.increments();
			table.text('program_name', 128).unique().notNullable();
		})

		.createTable('role', (table) => {
			table.increments();
			table.text('role_name', 128).unique().notNullable();
		})

		.createTable('users', (table) => {
			table.increments('id').primary();
			table.string('first_name').notNullable();
			table.string('last_name').notNullable();
			table
				.integer('program')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('program')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			table.integer('sprint').notNullable();
			table.integer('points').notNullable();
			table.integer('role')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('role')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		});

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
		.dropTableIfExists('users')
		.dropTableIfExists('role')
		.dropTableIfExists('program');
};
