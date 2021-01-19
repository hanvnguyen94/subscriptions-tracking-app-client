'use strict'

const store = require('./../store')

const subList = document.querySelector('.sub-list')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')
  $('.sub-list').show()
  // $('#sub-display').hide()
  $('.sub-container').show()
  //  'store' the subscription
  let newSub = response.subscription
  store.subscription = newSub

  const subHTML = (`
  <div class="demo">
    <p>Website Address: ${newSub.url}</p>
    <p>Start Date: ${newSub.start}</p>
    <p>End Date: ${newSub.end}</p>
    <p>ID: ${newSub._id}</p>
  </div>`)

  $('#sub-display').html(subHTML)

  $('form').trigger('reset')
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
  // console.log('my obj subs ', mySubs)
  $('#sub-display').show()
  $('.sub-container').hide()
  $('#message').text('Below is your subscriptions list')
  let allSubsHTML = ''

  mySubs.forEach(singleSub => {
    const singleSubHTML = (`
      <div class="demo">
        <p>Website Address: ${singleSub.url}</p>
        <p>Start Date: ${singleSub.start}</p>
        <p>End Date: ${singleSub.end}</p>
        <p>ID: ${singleSub._id}</p>
      </div>`)

    allSubsHTML += singleSubHTML
  })
  $('#sub-display').html(allSubsHTML)
  // making delete button
  // $('.delete-btn').on('click', deleteButton, () => {
  //   // deleteButton.innerHTML = deleteButton
  //   $('delete-btn').attr('id', 'modal-deleteSub')
  //   console.log('im here')
  // })

  // $('.sub-list').hide()

  $('form').trigger('reset')
}

const showSubsFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('#sub-display').hide()
  $('form').trigger('reset')
}

const updateSubSuccess = function (response) {
  $('#message').text('Successfully updated!')
  $('form').trigger('reset')
}

const updateSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('#sub-display').hide()
  $('form').trigger('reset')
}

const getSubSuccess = function (response) {
  // console.log(response)
  const sub = response.subscription

  $('#message').text('Here is what we found')
  const subHTML = (`
    <div class="demo">
      <p>Website Address: ${sub.url}</p>
      <p>Start Date: ${sub.start}</p>
      <p>End Date: ${sub.end}</p>
    </div>`)

  $('#sub-display').html(subHTML)
  $('form').trigger('reset')
}

const getSubFailure = function (error) {
  $('#message').html('There is an error occurs ', error)
  $('#sub-display').hide()
  $('form').trigger('reset')
}

const deleteSubSuccess = function (event) {
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
