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

const deleteSubSuccess = function () {
  const subHTML = (`
    <div>
      <h4>Successfully Removed The Sub</h4>
    </div>`)
  $('#message').html(subHTML)
  $('form').trigger('reset')
}

const deleteSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
}

module.exports = {
  createSubSuccess,
  createSubFailure,
  deleteSubSuccess,
  deleteSubFailure
  // playTurnSuccess,
  // playTurnFailed,
  // showGamesSuccess,
  // showGamesFailure
}
