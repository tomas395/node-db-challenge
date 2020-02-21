module.exports = {
  getResources,
  getProjects,
  getTask,
  addResources,
  addProjects,
  addTask
};

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projects");
}

function getTask() {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select("projects.project_name", "projects.project_description");
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
