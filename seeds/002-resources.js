exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { id: 1, resource_name: "Lemon Juice", description: "super juice" },
        { id: 2, resource_name: "NyQuill", description: "stooper juice" }
      ]);
    });
};
