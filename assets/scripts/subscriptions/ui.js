'use strict'

const store = require('./../store')

// select DOM
const subInput = document.querySelector('.sub-input')
const subButton = document.querySelector('.sub-button')
const subList = document.querySelector('.sub-list')

// const editButton = document.getElementById('modal-editSub')
const deleteButton = document.getElementById('modal-deleteSub')

const createSubSuccess = function (response) {
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('.navbar').show()
  $('#message').text('New Subscription Created')
  $('.sub-list').show()
  $('#sub-display').hide()
  $('.sub-container').show()
  //  'store' the subscription
  let newSub = response.subscription
  store.subscription = newSub
  console.log('new sub data ', newSub)
  // trying new thing to display
  // const subsList = []
  // subsList.push(newSub)
  // subsList.forEach(singleSub => {
  // create a whole div to display sub list
  const subDiv = document.createElement('div')
  subDiv.classList.add('sub')
  // create list
  newSub = document.createElement('li')
  newSub.innerHTML = store.subscription.url
  // save
  newSub.classList.add('sub-item')
  subDiv.appendChild(newSub)
  // subDiv.classList.add('demo')
  // create buttons
  const editButton = document.createElement('button')
  editButton.innerHTML = 'Edit'

  // adding class for styling
  editButton.classList.add('edit-btn')
  subDiv.appendChild(editButton)
  // Create delete button
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Delete'
  deleteButton.classList.add('delete-btn')
  subDiv.appendChild(deleteButton)
  // attach sub
  subList.appendChild(subDiv)
  // })
  // $('.edit-btn').on('click', () => console.log('im here'))
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
  console.log(response)
  const sub = response.subscription

  // console.log('sub is ', sub)
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
