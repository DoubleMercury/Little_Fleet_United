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
    console.log("fleetData.carStatus is " + fleetData.carStatus);
    console.log("req.body.carStatus is " + req.body.carStatus);
    if (fleetData.carStatus == "rented") {
      fleetData.push(req, res);
      res.json(true);
    }
    else {
      availableData.push(req.body);
      res.json(false);
    }
  });



}