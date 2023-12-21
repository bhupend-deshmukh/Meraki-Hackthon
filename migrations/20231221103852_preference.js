exports.up = function (knex) {
  return knex.schema.createTable("preference", function (table) {
    table.increments("id");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("target").nullable();
    table.string("specific_target").nullable();
    table.string("p_language").nullable();
    table.string("framework").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("preference");
};
