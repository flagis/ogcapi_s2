var express = require('express')
var router = express.Router()
   
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {

  var landingPage = {};
  landingPage.title = "Kontich";
  landingPage.description = "Access to data about buildings in the city of Kontich via a Web API that conforms to the OGC API Features specification.";
  landingPage.links = [];
  
  var item = {};
  item.href = "http://localhost/kontich/";
  item.rel = "self";
  item.type = "application/json";
  item.title = "this document";
  landingPage.links.push(item)

  // The API definition is metadata about the API and strictly not part of the
  // API itself, but it MAY be hosted as a sub-resource to the base path of the
  // API, for example, at path /api. There is no need to include the path of the 
  // API definition in the API definition itself.
  var item = {};
  item.href = "http://localhost/kontich/api";
  item.rel = "service-desc";
  item.type = "application/vnd.oai.openapi+json;version=3.0";
  item.title = "the API definition";
  landingPage.links.push(item)
  var item = {};
  item.href = "http://localhost/kontich/api.html";
  item.rel = "service-doc";
  item.type = "text/html";
  item.title = "the API documentation";
  landingPage.links.push(item)

  var item = {};
  item.href = "http://localhost/kontich/conformance";
  item.rel = "conformance";
  item.type = "application/json";
  item.title = "OGC API conformance classes implemented by this server";
  landingPage.links.push(item)
  
  var item = {};
  item.href = "http://localhost/kontich/collections";
  item.rel = "data";
  item.type = "application/json";
  item.title = "Information about the feature collections";
  landingPage.links.push(item)

  res.json(landingPage)
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

  res.send('api description in html')

})

// define the about route
router.get('/collections/:collectionId', function (req, res) {
  res.send('collections collectionId')
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
