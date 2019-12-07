exports.up = function(knex) {
  return knex.schema.createTable("candidates", table => {
    table.increments("id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("candidates");
};
