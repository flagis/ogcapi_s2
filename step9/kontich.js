var express = require('express')
var router = express.Router()
var url = require('url');
var landingPage = require('./data/landingPage');
var path = require('path');

var collectionsNames = ["GroepsopvangBabysEnPeuters", 
                        "OpenluchtSportvelden", "Sportlokalen", "groendienst", "septemberkermis"];

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {

  var urlParts = url.parse(req.url, true);
  if (null == urlParts.query.f)
    res.json(landingPage)
  else if ("json" == urlParts.query.f)
    res.json(landingPage)
  else if ("html" == urlParts.query.f)
    res.sendFile(path.join(__dirname + '/data/landingPage.html'));
  else
    res.json(400, "{'code': 'InvalidParameterValue', 'description': 'Invalid format'}")
})

// The server SHALL support the HTTP GET operation at the path /conformance.
router.get('/conformance', function (req, res) {
  var conformance = {};
  conformance.conformsTo = [];
  conformance.conformsTo.push("http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core");
  conformance.conformsTo.push("http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30");
  conformance.conformsTo.push("http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/html");
  conformance.conformsTo.push("http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson");
  res.json(conformance)
})

// The URIs of all API definitions referenced from the landing page SHALL support the HTTP GET method.
//
// A GET request to the URI of an API definition linked from the landing page (link relations
// service-desc or service-doc) with an Accept header with the value of the link property 
// type SHALL return a document consistent with the requested media type.
//
router.get('/api', function (req, res) {
  res.json('{api def here in json}')
})

// 
router.get('/api.html', function (req, res) {
  res.send('api description in html')
})

// define the about route
router.get('/collections', function (req, res) {

  var urlParts = url.parse(req.url, true);
  if (null == urlParts.query.f) {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname + '/data/collections.json'));
  }
  else if ("json" == urlParts.query.f) {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname + '/data/collections.json'));
  }
  else if ("html" == urlParts.query.f)
    res.sendFile(path.join(__dirname + '/data/collections.html'));
  else
    res.json(400, "{'code': 'InvalidParameterValue', 'description': 'Invalid format'}")
})

// define the about route
router.get('/collections/:collectionId', function (req, res) {

  if (!collectionsNames.includes(req.params.collectionId))
  {
    res.status(404).send("The requested URL " + req.url + " was not found on this server");
    return;
  }

  var urlParts = url.parse(req.url, true);
  var ext = urlParts.query.f;
  if (null == ext)
    ext = "html";
  ext = "." + ext;

   res.sendFile(path.join(__dirname + '/data/' + req.params.collectionId + ext));
})

// define the about route
router.get('/collections/:collectionId/items', function (req, res) {
  res.send('collections/:collectionId/items')
})

// define the about route
router.get('/collections/:collectionId/items/:item', function (req, res) {
  console.log(req.params);
  res.send('collections/:collectionId/items/:item')
})

module.exports = router
