'use strict'

const store = require('./../store')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  $('#change-password').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')
  //  'store' the game
  const subHTML = `<h3>List of your subscriptions:</h3>
  <ul>
    <li>${response.subscription.name}</li>
  </ul>`
  $('#sub-display').html(subHTML)
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
