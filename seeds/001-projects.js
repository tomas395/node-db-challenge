exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Scrub 100 Stoves",
          project_description: "Use elbow grease to make 100 stoves sparkle."
        },
        {
          id: 2,
          project_name: "Sleep",
          project_description: "Close eyes until you leave the astral plane."
        }
      ]);
    });
};
