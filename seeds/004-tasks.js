exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          task: "Clean every stove",
          project_id: 1,
          taskDescription: "Scrub like your life depends on it.",
          notes: "git kraken",
          completed_task: ""
        },
        {
          task: "Go to sleep",
          project_id: 2,
          taskDescription: "Drink up.",
          notes: "just down it",
          completed_task: ""
        }
      ]);
    });
};
