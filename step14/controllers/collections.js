const accepts = require('accepts')
var collections = require('../models/collections.js')
var utils = require('../utils/utils')

function get (req, res) {

  var serviceUrl = utils.getServiceUrl(req)

  collections.get(serviceUrl, function(err, content) {

    var accept = accepts(req)

    switch (accept.type(['json', 'html'])) {
      case `json`:
        res.status(200).json(content)
        break
      case `html`:
        res.render(`collections`, { content: content })
        break
      default:
        res.status(400).json(`{'code': 'InvalidParameterValue', 'description': '${accept} is an invalid format'}`)
    }
  })
}

module.exports = {
  get, 
}