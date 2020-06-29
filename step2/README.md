# Stap 2

Installatie van ExpressJs, het gaat ons leven makkelijker maken om om te gaan met paden in http

## Installer ExpressJS

Ga naar de directory van step2, en met een command prompt, typ:

```
npm install express --save
```

Na de installatie zie je:

```
...
+ express@4.17.1
added 50 packages from 37 contributors and audited 50 packages in 1.563s
found 0 vulnerabilities
```

## Start NodeJS (met Express)

```
node index.js
```
Op je scherm:
```
Example app listening at http://localhost:80
```

## Testen in een browser:
http://localhost

`Hello World!`

Echter, elk ander pad werkt nu niet meer
http://localhost/kontich

geeft:
`Cannot GET /kontich`
