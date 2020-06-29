# Wat heeft Kontich te bieden qua geo bestanden?

- groendienst
- Groepsopvang Babys En Peuters 
- Openlucht Sportveld 
- september kermis
- Sport lokaal 

(Met dank aan Michel Stuyts, GIS-coördinator. Zie ook op https://michelstuyts.be/)

## Stap 1:
Zoals altijd, ga naar de step8 directory met je command prompt, en installeer express als het de eerste keer dat je node gaat opstarten in deze directory. `npm install express --save`

## Code:

```javascript

...
// define the about route
router.get('/collections', function (req, res) {

  var urlParts = url.parse(req.url, true);
  if (null == urlParts.query.f)
    res.json(collections)
  else if ("json" == urlParts.query.f)
    res.json(collections)
  else if ("html" == urlParts.query.f)
    res.sendFile(path.join(__dirname + '/data/collections.html'));
  else
    res.json(400, "{'code': 'InvalidParameterValue', 'description': 'Invalid format'}")
})

...

```

## 2 Testen:
```
node index.js
```

`Example app listening at http://localhost:80`

In je browser of via PostMan

Landing Page:
- http://localhost/kontich/collections
- http://localhost/kontich/collections?f=json
- http://localhost/kontich/collections?f=html

Resultaat:

in JSON
> `{"title":"Kontich","description":"Access to data about buildings in the city of Kontich via a Web API that conforms to the OGC API Features specification.","links":[{"href":"http://localhost/kontich/","rel":"self","type":"application/json","title":"this document"},{"href":"http://localhost/kontich/api","rel":"service-desc","type":"application/vnd.oai.openapi+json;version=3.0","title":"the API definition"},{"href":"http://localhost/kontich/api.html","rel":"service-doc","type":"text/html","title":"the API documentation"},{"href":"http://localhost/kontich/conformance","rel":"conformance","type":"application/json","title":"OGC API conformance classes implemented by this server"},{"href":"http://localhost/kontich/collections","rel":"data","type":"application/json","title":"Information about the feature collections"}]}`

in HTML:

> Collections in this service
>
> Name | Description
------------ | -------------
Groepsopvang Babys En Peuters|Groepsopvang Babys En Peuters uit de Informatie Vlaanderen API voor de gemeente Kontich
Openlucht Sportvelden|Openlucht Sportvelden uit de Informatie Vlaanderen API voor de gemeente Kontich
Sport lokalen|Sport lokalen uit de Informatie Vlaanderen API voor de gemeente Kontich
September kermis|Septemberkermis uit de Informatie Vlaanderen API voor de gemeente Kontich
Groendienst|Groendienst uit de Informatie Vlaanderen API voor de gemeente Kontich

## Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step9/README.md

