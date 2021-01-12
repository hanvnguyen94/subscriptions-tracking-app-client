'use strict'

const store = require('./../store')

$('.authenticated').hide()

// the ajax function's .then
// will pass this function a response object from the API
const signUpSuccess = function (response) {
  $('#message').text('Congrats! Now You Can Sign In')
  $('.img-head').attr('scr', 'https://images.unsplash.com/photo-1523634921619-37ce98c1877f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')
  $('form').trigger('reset')
}

// the ajax function's .catch
// will pass this function an error object
const signUpFailure = function (error) {
  $('#message').text('Failed To Sign Up ', error)
  $('.unauthenticated').show()
  $('.container').show()
  $('.app-name').show()
  $('.welcome').show()
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  // save user information to use later on
  store.user = response.user
  $('#message').html(`Welcome Back, <strong>${store.user.email}</strong>!`)
  $('.user-name').text(`${store.user.email}`)
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.img-head').hide()
  // show the authenticated options
  $('#change-password').show()
  $('#sign-out').show()
  $('.app-name').hide()
  $('#sub-display').hide()
  $('.sub-container').hide()
  $('#modal-deleteSub').show()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text(error.responseJSON.message)
  $('.authenticated').hide()
  $('.app-name').show()
  $('.welcome').show()
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Updated New Password')
  $('#sub-display').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password ' + error.responseJSON.message)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('.img-head').show()
  // VERY IMPORTANT => unstore the user information
  store.user = null
  $('#message').text('Successfully Sign Out')
  $('.app-name').show()
  $('.welcome').show()
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Failed Sign Out ' + error.responseJSON.message)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
