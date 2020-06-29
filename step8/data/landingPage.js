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

module.exports = landingPage
