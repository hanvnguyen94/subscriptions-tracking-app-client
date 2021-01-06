'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateSub = function (event) {
  event.preventDefault()
  $('#sign-out').show()

  const form = event.target
  const data = getFormFields(form)

  console.log('data is ', data)
  api.createSub(data)
    .then(ui.createSubSuccess)
    .catch(ui.createSubFailure)
}

module.exports = {
  onCreateSub
  // onPlayTurn,
  // onShowGames
}
