var express = require('express');
var router = express.Router();
var signin = require("../model/signin_model");

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
 // res.json(req.body);
});
router.get("/", function(req, res, next) {
      res.render('Login');
     // res.json(req.body);
  });
  router.get('/addflat', function(req, res, next) {
    res.render('addFlat');
   // res.json(req.body);
  });
  router.get('/addtenant', function(req, res, next) {
    res.render('addTenant');
   // res.json(req.body);
  });
  router.get('/viewflatmembers', function(req, res, next) {
    res.render('view_flat_members');
   // res.json(req.body);
  });
  router.get('/viewflatdetails', function(req, res, next) {
    res.render('view_flat_details');
   // res.json(req.body);
  });
  router.get('/viewcomplaints', function(req, res, next) {
    res.render('viewComplaints');
   // res.json(req.body);
  });
  router.get('/festivalDetails', function(req, res, next) {
    res.render('festival_details');
   // res.json(req.body);
  });
  router.get('/sidebar', function(req, res, next) {
    res.render('sidebar');
   // res.json(req.body);
  });
  
 
module.exports = router;
