exports.seed = function(knex) {
  return knex("projectsDetails")
    .truncate()
    .then(function() {
      return knex("projectsDetails").insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 }
      ]);
    });
};
