
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table) {
        table.increments('id').primary();
        table.boolean('isHappy').default(true);
        table.integer('hapinessLevel').default(100);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
