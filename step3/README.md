# Stap 3

Express routes

Ga ook nu weer in de step3 directory staan via de command prompt. express moet opnieuw geinstalleerd worden:
```
npm install express --save
```

## 1: Express routes

```javascript
const express = require('express')
const app = express()
const port = 80

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/about', function (req, res) {
    res.send('about!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```

```
node index.js

Example app listening at http://localhost:80
```

## 2: Routes testen (HTTP commando GET)

In je browser: http://localhost

Op het scherm komt:
>`Hello World!`

In je browser: http://localhost/about

Op het scherm komt: 
> `about!`

## 3: Routes testen (Andere HTTP commando's)

Een GET command is makkelijk te versturen via de browser, maar de andere niet - daarom gebruiken we een tool om http commandos te sturen naar onze server.
Installeer Postman https://www.postman.com/ (download, installeer, registreren is optioneel) (vele andere gelijkaardige tools zijn even goed, zoals Insomnia)

In Postman: neem het `POST` command in de dropdown, in het url vakje: `http://localhost/`

In het resultaten window komnt nu: 
> `Got a POST request`

Test ook `PUT` en `DELETE` voor `http://localhost/user`

Onze focus gaat vooral naar `'GET` in de eerste 10 lessen

# Klaar voor de volgende stap
https://github.com/flagis/ogcapi_s2/blob/master/step4/README.md
