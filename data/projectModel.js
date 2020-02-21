const db = require("./db-config");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getJustTasks,
  addResources,
  addProjects,
  addTask,
  findById
};

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getJustTasks() {
  return db("tasks");
}

function getTasks(id) {
  if (!id) {
    return db("tasks")
      .join("projects", "tasks.project_id", "=", "projects.id")
      .select(
        "projects.project_name",
        "projects.project_description",
        "tasks.task"
      );
  }
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task"
    )
    .where({ project_id: id });
}

function addResources(resource) {
  return db("resources").insert(resource);
}

function addProjects(project) {
  return db("projects").insert(project);
}

function addTask(newTask) {
  return db("tasks")
    .insert(newTask)
    .then(ids => {
      return findById(ids[0]);
    });
}

// function addTask(task) {
//   return db("tasks").insert(task);
// }
