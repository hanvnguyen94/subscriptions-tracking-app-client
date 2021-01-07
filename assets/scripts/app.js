'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')

const subEvents = require('./subscriptions/events')
// use require without a reference to ensure a file is bundled
// require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // auth process
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // subscriptions process
  $('#create-new-sub').on('submit', subEvents.onCreateSub)
  // $('.sub-list').on('click', subEvents.onDeleteSub)
})
