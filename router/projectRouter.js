const express = require("express");

const router = express.Router();

const db = require("../data/projectModel");

// here come the CRUD

router.get("/projects", (req, res) => {
  db.getProjects()
    .then(allProjects => {
      res.status(200).json(allProjects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to retrieve all of the projects :(" });
    });
});

router.get("/alltasks", (req, res) => {
  db.getJustTasks()
    .then(allProjects => {
      res.status(200).json(allProjects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to retrieve all of the projects :(" });
    });
});

router.get("/resources", (req, res) => {
  db.getResources()
    .then(allResources => {
      res.status(200).json(allResources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to retrieve all of the resources :(" });
    });
});

router.get("/tasks", (req, res) => {
  db.getTasks()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log("POST resources error", err);
      res.status(500).json({ message: "Failed to retrieve the task :(" });
    });
});

router.post("/resources", (req, res) => {
  const newResource = req.body;
  db.addResources(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log("POST resources error", err);
      res.status(500).json({ message: "Failed to add the resource data :(" });
    });
});

router.post("/projects", (req, res) => {
  const newProject = req.body;
  db.addProjects(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log("POST projects error", err);
      res.status(500).json({ message: "Failed to add project data :(" });
    });
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;
  db.addTask(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log("POST task error", err);
      res.status(500).json({ message: "Failed to add task data :(" });
    });
});

module.exports = router;
