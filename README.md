# FLAGIS OGC API Session 2

In een eerste van twee technische delen (16 december 2019) gingen we dieper in op de ontstaansgeschiedenis en opbouw van de nieuwe serie van OGC API's, hoe ze passen in de API roadmap. We gebruikten OpenAPI en SwaggerHub om de OGC API Features verder (technisch) te ontleden en met een onderliggende test database ook effectief aan te roepen.

Hoog tijd om een stap verder te gaan: in het tweede gedeelte nemen we de andere onderdelen van de OGC API familie onder de loep (coverages, map tiles and Processes) en bouwen we een voorbeeld server middels NodeJS. Breng dus opnieuw je laptop mee!

## Voorbereiding

### Installeer NodeJS
Ga naar https://nodejs.org/en/ en installeer de LTS

Test de installatie via een command prompt:
```
node
```

Als alles correct werd geinstalleerd, dan zie je:
```
Welcome to Node.js v12.18.1.
Type ".help" for more information.
>
```

Prima moment om ook Postman https://www.postman.com/ te installeren (download, installeer, registreren is optioneel)
(Meer hierover in step3)


### Clone deze repo op je machine

maak gebruik van een git client (https://desktop.github.com/)

De url voor deze repo is https://github.com/flagis/ogcapi_s2

Tijdens de sessie gaan we geregeld kijken naar, dus hou ze bij de hand in je browser tabs
- http://docs.opengeospatial.org/is/17-069r3/17-069r3.html
- https://github.com/opengeospatial/ogcapi-features
- http://beta.fmi.fi/data/3/wfs/sofp/collections
