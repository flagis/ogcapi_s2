var swig = require('swig-templates');

function header(title, description) {
    var header = {};
    header.title = title;
    header.description = description;
    header.links = [];

    return header;
}

function item(href, rel, type, title) {
    var item = {};
    item.href = href;
    item.rel = rel;
    item.type = type;
    item.title = title;

    return item;
}

function landingPageJSON() {
    var landingPage = header("Kontich OGC API Feature server", "Access to data about buildings in the city of Kontich via a Web API that conforms to the OGC API Features specification.");
    
    landingPage.links.push(item("http://localhost/kontich/",            "self",         "application/json", "this document"));
    landingPage.links.push(item("http://localhost/kontich/api",         "service-desc", "application/vnd.oai.openapi+json;version=3.0", "the API definition"));
    landingPage.links.push(item("http://localhost/kontich/api.html",    "service-doc",  "text/html",        "the API documentation"));
    landingPage.links.push(item("http://localhost/kontich/conformance", "conformance",  "application/json", "OGC API conformance classes implemented by this server"));
    landingPage.links.push(item("http://localhost/kontich/collections", "data",         "application/json", "Information about the feature collections"));
    
    return landingPage;
}

function landingPageHTML() {
    var tmpl = swig.compileFile(__dirname + '/landingPage.template'),
    renderedHtml = tmpl({
        title: 'Kontich OGC API Feature server',
        url: 'http://localhost/kontich',
    });
    
    return renderedHtml;
}

function landingPage(t) {
    if (t == "json")
        return landingPageJSON();
    return landingPageHTML();
}

module.exports = { landingPage }
