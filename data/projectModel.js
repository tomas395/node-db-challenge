module.exports = {
  getResources,
  addResources,
  getProjects,
  addProjects,
  getTask,
  addTask,
  getProjectsById
};

function getResources() {
  return db("resource");
}

function addResources(resource) {
  return db("resource").insert(resource);
}

function getProjects() {
  return db("projects");
}

function getProjectsById(userId) {
  return db("projects").where({ id: userId });
}

function addProjects(project) {
  return db("projects").insert(project);
}
