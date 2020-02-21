const express = require("express");

const router = express.Router();

const db = require("../data/projectModel");

// here come the CRUD

router.get("/", (req, res) => {
  db("projects")
    .then(allProjects => {
      res.json(allProjects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to retrieve all of the projects :(" });
    });
});

router.get("/", (req, res) => {
  db("resources")
    .then(allResources => {
      res.json(allResources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to retrieve all of the resources :(" });
    });
});

//   router.get("/", (req, res) => {
//     db("project")
//       .then(allProjects => {
//         res.json(allProjects);
//       })
//       .catch(err => {
//         res.status(500).json({ message: "Failed to retrieve the projects :(" });
//       });
//   });

router.post("/", (req, res) => {
  const projectsData = req.body;
  db("projects")
    .insert(projectsData)
    .then(ids => {
      db("projects")
        .where({ id: ids[0] })
        .then(newProject => {
          res.status(201).json(newProject);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store project data :(" });
    });
});

// router.post("/", (req, res) => {
//     const projectsData = req.body;
//     db("projects")
//       .insert(projectsData)
//       .then(ids => {
//         db("projects")
//           .where({ id: ids[0] })
//           .then(newProject => {
//             res.status(201).json(newProject);
//           });
//       })
//       .catch(err => {
//         console.log("POST error", err);
//         res.status(500).json({ message: "Failed to store project data :(" });
//       });
//   });

//   router.post("/", (req, res) => {
//     const projectsData = req.body;
//     db("projects")
//       .insert(projectsData)
//       .then(ids => {
//         db("projects")
//           .where({ id: ids[0] })
//           .then(newProject => {
//             res.status(201).json(newProject);
//           });
//       })
//       .catch(err => {
//         console.log("POST error", err);
//         res.status(500).json({ message: "Failed to store project data :(" });
//       });
//   });

module.exports = router;
