var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/', function(req,res) {
  res.send('API working');
});

router.get("/victrees/:table", (req, res) => {
  const table = req.params.table;
  db(`SELECT * FROM ${table};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/victrees/form", (req, res) => {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newOrgName = req.body.org_name;
  const newUrl = req.body.org_url;
  const newMessage = req.body.message;

  db(`INSERT INTO form(name,email,org_name,org_url,message) VALUES(${JSON.stringify(newName)},${JSON.stringify(newEmail)},${JSON.stringify(newOrgName)},${JSON.stringify(newUrl)},${JSON.stringify(newMessage)});`)
    .then(results => {
      res.send(results);
      res.send("posted new form");
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
