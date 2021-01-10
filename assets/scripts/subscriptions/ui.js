'use strict'

const store = require('./../store')

// select DOM
const subInput = document.querySelector('.sub-input')
const subButton = document.querySelector('.sub-button')
const subList = document.querySelector('.sub-list')

const editButton = document.getElementById('modal-editSub')
const trashButton = document.getElementById('modal-deleteSub')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')
  $('.sub-list').show()
  $('#sub-display').hide()
  //  'store' the subscription
  let newSub = response.subscription
  store.subscription = newSub
  console.log('new sub data ', newSub)
  // trying new thing to display
  const subDiv = document.createElement('div')
  subDiv.classList.add('sub')
  // create list
  newSub = document.createElement('li')
  newSub.innerHTML = store.subscription.url
  // save
  newSub.classList.add('sub-item')
  subDiv.appendChild(newSub)
  // subList.appendChild(newSub)

  // create buttons
  // const editButton = document.createElement('button')
  // editButton.innerHTML = (editButton)

  // adding class for styling
  editButton.classList.add('edit-btn')
  subDiv.appendChild(editButton)
  // Create trash button
  // const trashButton = document.createElement('button')
  // trashButton.innerHTML = 'Delete'
  trashButton.classList.add('trash-btn')
  subDiv.appendChild(trashButton)
  // attach sub
  subList.appendChild(subDiv)
  // reset all forms
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
  let allSubsHTML = ''

  mySubs.forEach(singleSub => {
    const singleSubHTML = (`
      <div>
        <p>Website Address: ${singleSub.url}</p>
        <p>Start Date: ${singleSub.start}</p>
        <p>End Date: ${singleSub.end}</p>
        <p>ID: ${singleSub._id}</p>
      </div>`)

    allSubsHTML += singleSubHTML
  })
  $('#sub-display').html(allSubsHTML)
  $('.sub-list').hide()
  $('form').trigger('reset')
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

  // console.log('sub is ', sub)

  const subHTML = (`
    <div>
      <p>Website Address: ${sub.url}</p>
      <p>Start Date: ${sub.start}</p>
      <p>End Date: ${sub.end}</p>
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
