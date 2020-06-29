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
> `{
  "links": [
    {
      "href": "http://localhost/kontich/collections",
      "rel": "self",
      "type": "application/json",
      "title": "Metadata about the feature collections"
    }
  ],
  "collections": [
    {
      "name": "Groepsopvang_Babys_En_Peuters",
      "title": "Groepsopvang Babys En Peuters",
      "description": "GroepsopvangBabysEnPeuters",
      "links": [
        {
          "href": "https://localhost/kontich/collections/GroepsopvangBabysEnPeuters/items",
          "rel": "item",
          "type": "application/json",
          "title": "Groepsopvang Babys En Peuters"
        }
      ]
    },
    {
      "name": "Openlucht_Sportvelden",
      "title": "Openlucht Sportvelden",
      "description": "",
      "links": [
        {
          "href": "https://localhost/kontich/collections/OpenluchtSportvelden/items",
          "rel": "item",
          "type": "application/json",
          "title": "Openlucht Sportvelden"
        }
      ]
    },
    {
      "name": "Sport_Lokalen",
      "title": "Sport Lokalen",
      "description": "",
      "links": [
        {
          "href": "https://localhost/kontich/collections/SportLokalen/items",
          "rel": "item",
          "type": "application/json",
          "title": "Sport Lokalen"
        }
      ]
    },
    {
      "name": "septemberkermis",
      "title": "September Kermis",
      "description": "",
      "links": [
        {
          "href": "https://localhost/kontich/collections/septemberkermis/items",
          "rel": "item",
          "type": "application/json",
          "title": "September Kermis"
        }
      ]
    },
    {
      "name": "groendienst",
      "title": "Groendienst",
      "description": "",
      "links": [
        {
          "href": "https://localhost/kontich/collections/Groendienst/items",
          "rel": "item",
          "type": "application/json",
          "title": "Groendienst"
        }
      ]
    },
  ]
}`

in HTML:

> Collections in this service

Name | Description
------ | -------------
Groepsopvang Babys En Peuters|Groepsopvang Babys En Peuters uit de Informatie Vlaanderen API voor de gemeente Kontich
Openlucht Sportvelden|Openlucht Sportvelden uit de Informatie Vlaanderen API voor de gemeente Kontich
Sport lokalen|Sport lokalen uit de Informatie Vlaanderen API voor de gemeente Kontich
September kermis|Septemberkermis uit de Informatie Vlaanderen API voor de gemeente Kontich
Groendienst|Groendienst uit de Informatie Vlaanderen API voor de gemeente Kontich

## Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step9/README.md

