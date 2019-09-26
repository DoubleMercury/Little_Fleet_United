const path = require("path");

module.exports = function(app) {
    app.get("/fleet", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/fleet.html"));
    });
    app.get("/addCar", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/addCar.html"));
    });
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};