'use strict'

const store = require('./../store')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')

  //  'store' the subscription
  const newSub = response.subscription
  store.subscription = newSub

  // const ourHTML = `<li>${newSub.subscription.name}</li>`
  // reset all forms
  $('form').trigger('reset')
  $('#sign-out').show()
}

const createSubFailure = function (error) {
  $('#message').text('Subscription create failed ' + error.responseJSON.message)
  $('form').trigger('reset')
}

// index show all subs
const showSubsSuccess = function (response) {
  const subs = response.subscriptions
  const owned = store.user._id
  const mySubs = subs.filter(mySubs => mySubs.owner === owned)
  console.log(mySubs)

  const subsString = JSON.stringify(mySubs)
  $('#message').text(subsString)
  $('form').trigger('reset')
  // let subsHTML = ''
  //
  //
  // subs.forEach(currentSub => {
  //   const currentSubHTML = (`
  //     <div>
  //       <h4>Name: ${currentSub.name}</h4>
  //       <p>Description: ${currentSub.description}</p>
  //       <p>ID: ${currentSub._id}</p>
  //     </div>`)
  //
  //   subsHTML += currentSubHTML
  // })
  //
  // $('#sub-display').html(subsHTML)

  // $('#message').text(`${store.user.email} has ${subs.length} items`)
}

const showSubsFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('form').trigger('reset')
}

const updateSubSuccess = function (response) {
  $('#message').text('Successfully updated!')
  $('form').trigger('reset')
}

const updateSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('form').trigger('reset')
}

const getSubSuccess = function (response) {
  console.log(response)
  const sub = response.subscription

  console.log('sub is ', sub)

  const subHTML = (`
    <div>
      <h4>Name: ${sub.name}</h4>
      <p>Start Date: ${sub.start}</p>
      <p>End Date: ${sub.end}</p>
      <p>Owner: ${sub.owner}</p>
    </div>`)

  $('#sub-display').html(subHTML)
  $('form').trigger('reset')
}

const getSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('form').trigger('reset')
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
  $('form').trigger('reset')
}

module.exports = {
  createSubSuccess,
  createSubFailure,
  showSubsSuccess,
  showSubsFailure,
  updateSubSuccess,
  updateSubFailure,
  getSubSuccess,
  getSubFailure,
  deleteSubSuccess,
  deleteSubFailure
}
