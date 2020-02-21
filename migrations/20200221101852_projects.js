exports.up = function(knex) {
  return (
    knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.text("project_name").notNullable();
        tbl.text("project_description");
        tbl
          .boolean("completed_project")
          .notNullable()
          .defaultTo("false");
      })

      //Adding a description is OPTIONAL

      .createTable("resource", tbl => {
        tbl.increments();
        tbl.text("resource_name").notNullable();
        tbl.text("description");
      })

      // notes are OPTIONAL

      .createTable("tasks", tbl => {
        tbl.increments();
        tbl
          .integer("project_id", 100)
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl.text("description").notNullable();
        tbl.text("notes");
        tbl
          .boolean("completed_task")
          .notNullable()
          .defaultTo("false");
      })

      .createTable("projectsDetails", tbl => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resource")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl.integer("quantity");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projectsDetails");
};
