# Wat heeft Kontich te bieden qua geo bestanden? (Cont)

- groendienst
- Groepsopvang Babys En Peuters 
- Openlucht Sportveld 
- september kermis
- Sport lokaal 

(Met dank aan Michel Stuyts, GIS-coördinator. Zie ook op https://michelstuyts.be/)

## Stap 1:
Zoals altijd, ga naar de step8 directory met je command prompt, en installeer express als het de eerste keer dat je node gaat opstarten in deze directory. `npm install express --save`

## Code for /collections/:collectionId:

```javascript

...
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

...

```

## Testen:
```
node index.js
```

`Example app listening at http://localhost:80`

In je browser of via PostMan

Landing Page:
- http://localhost/kontich/collections/groendienst
- http://localhost/kontich/collections/groendienst?f=json
- http://localhost/kontich/collections/groendienst?f=html

Resultaat:

### in JSON
```json
{
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
}
```

### in HTML:

Metadata about the feature collections
Collections.
groendienst (groendienst)
groendienst.

Links for the collection
item = (groendienst)[http://localhost/kontich/collections/groendienst/items] (application/json)

Links
self = (Metadata about the feature collections)[http://localhost/kontich/collections] (application/json)

JSON output
Get raw (JSON)[http://localhost/kontich/collections?f=json]

## Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step9/README.md

