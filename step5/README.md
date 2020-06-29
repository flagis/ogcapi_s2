# Stap 5

We gaan een OGC API Features service maken voor Kontich! Joepie

## 1 Voorbereiding:
Eerst even Express installeren (om de repo zo klein mogelijk te houden, zit `express` er niet bij en moet je het installeren bij de eerste keer dat je de code runt in de directory. Eenmaal het er staat, ben je OK)


## 2 Eerste voorzichtige stapjes
```javascript
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Kontich landing page')
})

// define the about route
router.get('/conformance', function (req, res) {
  res.send('conformance page')
})

// define the about route
router.get('/collections', function (req, res) {
  res.send('collections on this server')
})

//...

module.exports = router
```

We hebben een Landing Page, Conformance en Collections opgezet - mooi!
Dit zijn 3 essentiele paden die **moeten** aanwezig zijn (de andere paden bekijken we straks)

Laten we eens in de spec kijken wat we hier mee aan moeten:
- http://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_api_landing_page
- https://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_declaration_of_conformance_classes
- https://docs.opengeospatial.org/is/17-069r3/17-069r3.html#_collection_

## Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step6/README.md
