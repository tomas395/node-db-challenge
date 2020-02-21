const db = require("./db-config");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addResources,
  addProjects,
  addTask
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.id")
    .select("projects.project_name", "projects.project_description", "task")
    .where({ project_id: id });
}

function addResources(resource) {
  return db("resources").insert(resource);
}

function addProjects(project) {
  return db("projects").insert(project);
}

function addTask(task) {
  return db("tasks").insert(task);
}
