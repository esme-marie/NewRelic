var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.send('API working');
});

router.get("/planets", (req, res, next) => {
  db(`SELECT * FROM planet;`)
      .then(results => {
          res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

router.get("/planets/:id", (req, res, next) => {
  db(`SELECT * FROM planet WHERE id =${req.params.id};`)
      .then(results => {
          res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});

router.get("/message/", (req, res, next) => {
  db(`SELECT * FROM message ORDER BY id ASC;`)
      .then(results => res.send(results.data))
      .catch(res => res.status(500).send(err));

});

router.get("/message/:id", (req, res, next) => {
  db(`SELECT * FROM message WHERE id= ${req.params.id}`)
      .then(results => res.send(results.data))
      .catch(res => res.status(500).send(err));

});

router.post("/message", function(req, res, next) {
  let newPlanets = req.body.planet_id;
  let newMessage = req.body.message;
  console.log("printing", newPlanets, newMessage);
  
  db(
    `INSERT INTO message(planet_id, message) VALUES (${JSON.stringify(newPlanets)}, ${JSON.stringify(newMessage)});`
    )
    .then(results => {
      res.send(results);
      console.log("Successfully added");
    })
    .catch(err => res.status(500).send(err));
  });

  router.get("/login/", (req, res, next) => {
    db(`SELECT * FROM login ORDER BY id ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });

  router.get("/user/", (req, res, next) => {
    db(`SELECT * FROM user ORDER BY id ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });

  router.get("/quiz/", (req, res, next) => {
    console.log("getting quiz table again and AGAIN")
    db(`SELECT * FROM quiz ORDER BY score ASC;`)
        .then(results => res.send(results.data))
        .catch(res => res.status(500).send(err));
  
  });

  router.post("/quiz/", function(req, res, next) {
    let newUserName = req.body.userName;
    let newScore = req.body.score;
    console.log("printing", newUserName, newScore,);
    db(`INSERT INTO quiz(user_id, name, score) VALUES (1, ${JSON.stringify(newUserName)}, ${JSON.stringify(newScore)});`)
      .then(results => {
        res.send(results);
        console.log("Successfully added");
      })
      .catch(err => res.status(500).send(err));
    });

module.exports = router;
