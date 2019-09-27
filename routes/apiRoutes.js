const fleetData = require("../data/fleetData");

const availableData = require("../data/availableListData");

module.exports = function (app) {

  app.get("/api/fleet", function (req, res) {
    res.json(fleetData);
  });

  app.get("/api/available", function (req, res) {
    res.json(availableData);
  });


  app.post("/api/fleet", function (req, res) {
    if (req.body.carStatus === "available") {
      availableData.push(req.body);
      res.json(true);
    }
    else {
      fleetData.push(req.body);
      res.json(false);
    }
   
  });



}