exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { resource_name: "Lemon Juice", resourceDescription: "super juice" },
        { resource_name: "NyQuill", resourceDescription: "stooper juice" }
      ]);
    });
};
