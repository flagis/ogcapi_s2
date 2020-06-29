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

## 2:
```
node index.js
```
