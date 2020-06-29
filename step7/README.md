# Landing Page in JSON & HTML

De Landing Page in Step6 was enkel beschikbaar in JSON, in deze les maken we die ook beschikbaar in HTML

## Stap 1:
Zoals altijd, ga naar de step7 directory met je command prompt, en installeer express als het de eerste keer dat je node gaat opstarten in deze directory. `npm install express --save`

## Code voor `/` (Landing Page)

```javascript
// define the home page route
router.get('/', function (req, res) {

  var urlParts = url.parse(req.url, true);
  if (null == urlParts.query.f)
    res.json(make.landingPage(urlParts.query.f))
  else if ("json" == urlParts.query.f)
    res.json(make.landingPage(urlParts.query.f))
  else if ("html" == urlParts.query.f)
    res.send(make.landingPage(urlParts.query.f))
  else
    res.json(400, "{'code': 'InvalidParameterValue', 'description': 'Invalid format'}")
})
```

## 2 Testen:
```
node index.js
```

`Example app listening at http://localhost:80`

In je browser of via PostMan

Landing Page:
- http://localhost/kontich
- http://localhost/kontich?f=json

Resultaat:

> `{"title":"Kontich","description":"Access to data about buildings in the city of Kontich via a Web API that conforms to the OGC API Features specification.","links":[{"href":"http://localhost/kontich/","rel":"self","type":"application/json","title":"this document"},{"href":"http://localhost/kontich/api","rel":"service-desc","type":"application/vnd.oai.openapi+json;version=3.0","title":"the API definition"},{"href":"http://localhost/kontich/api.html","rel":"service-doc","type":"text/html","title":"the API documentation"},{"href":"http://localhost/kontich/conformance","rel":"conformance","type":"application/json","title":"OGC API conformance classes implemented by this server"},{"href":"http://localhost/kontich/collections","rel":"data","type":"application/json","title":"Information about the feature collections"}]}`

Landing Page:
http://localhost/kontich?f=html



## Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step8/README.md
