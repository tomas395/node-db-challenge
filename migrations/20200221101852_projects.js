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
          .defaultTo(false);
      })

      //Adding a description is OPTIONAL

      .createTable("resources", tbl => {
        tbl.increments();
        tbl.text("resource_name").notNullable();
        tbl.text("resourceDescription");
      })

      // notes are OPTIONAL

      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("task").notNullable();
        tbl
          .integer("project_id", 100)
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl.text("taskDescription").notNullable();
        tbl.string("notes");
        tbl
          .boolean("completed_task")
          .notNullable()
          .defaultTo(false);
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
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projectsDetails");
};
