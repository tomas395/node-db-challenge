exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 1,
          description: "Scrub like your life depends on it.",
          notes: "git kraken"
        },
        { id: 2, project_id: 1, description: "Drink up." }
      ]);
    });
};
