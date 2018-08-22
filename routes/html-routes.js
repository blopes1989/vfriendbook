// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/samples/login.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/newsfeed", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newsfeed.html"));
  });
  //app.get("/index", function(req, res) {
   // res.sendFile(path.join(__dirname, "../index.html"));
  //});
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/samples/register.html"));
  });

  // app.get("/userlogged", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/user-profile.html"));
  // });


  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pages/samples/login.html"));
  });


};
