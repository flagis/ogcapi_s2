const debug = require('debug')('controller')
const accepts = require('accepts')
var collection = require('../models/collection.js')
var utils = require('../utils/utils')

function get (req, res) {
   
  debug(`collection ${req.url}`)

  var collectionId = req.params.collectionId
  var serviceUrl = utils.getServiceUrl(req)

  collection.get(serviceUrl, collectionId, function(err, content) {

    var accept = accepts(req)

    switch (accept.type(['json', 'html'])) {
      case `json`:
        res.status(200).json(content)
        break
      case `html`:
        res.render(`collection`, { content: content })
        break
      default:
        res.status(400).json(`{'code': 'InvalidParameterValue', 'description': '${accept} is an invalid format'}`)
    }
  })
  
}

module.exports = {
  get, 
}