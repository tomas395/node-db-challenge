exports.seed = function(knex) {
  return knex("projectsDetails")
    .truncate()
    .then(function() {
      return knex("projectsDetails").insert([
        { id: 1, project_id: 1, resource_id: 1 },
        { id: 2, project_id: 1, resource_id: 2 }
      ]);
    });
};
