'use strict'

const store = require('./../store')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')

  //  'store' the subscription
  store.subscription = response.subscription
  // reset all forms
  $('form').trigger('reset')
  $('#sign-out').show()
}

const createSubFailure = function (error) {
  $('#message').text('Subscription create failed ' + error.responseJSON.message)
}

module.exports = {
  createSubSuccess,
  createSubFailure
  // playTurnSuccess,
  // playTurnFailed,
  // showGamesSuccess,
  // showGamesFailure
}
