'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

// Select DOM
const subInput = document.querySelector('.sub-input')
const subButton = document.querySelector('.sub-button')
const subList = document.querySelector('.sub-list')

const editButton = document.getElementById('modal-editSub')
const trashButton = document.getElementById('modal-deleteSub')

const onCreateSub = function (event) {
  event.preventDefault()
  $('#sign-out').show()

  const form = event.target
  const subData = getFormFields(form)

  console.log('sub data is ', subData)
  $('#addNewModal').modal('hide')

  // testing
  let newSub = subData.subscription
  store.subscription = newSub
  const subDiv = document.createElement('div')
  subDiv.classList.add('sub')
  // create list
  newSub = document.createElement('li')
  newSub.innerHTML = subData.subscription.url
  // save
  newSub.classList.add('sub-item')
  subDiv.appendChild(newSub)
  // create buttons
  // const editButton = document.createElement('button')
  editButton.innerHTML = 'Edit'
  //   // adding class for styling
  editButton.classList.add('edit-btn')
  subDiv.appendChild(editButton)
  //   // Create trash button
  // const trashButton = document.createElement('button')
  trashButton.innerHTML = 'Delete'
  trashButton.classList.add('trash-btn')
  subDiv.appendChild(trashButton)
  //   // attach sub
  subList.appendChild(subDiv)

  api.createSub(subData)
    .then(ui.createSubSuccess)
    .catch(ui.createSubFailure)
}

// show index all subs

const onShowSubs = function (event) {
  event.preventDefault()
  // $('.sub-list').hide()

  api.showSubs()
    .then(ui.showSubsSuccess)
    .catch(ui.showSubsFailure)
}

const onUpdateSub = function (event) {
  event.preventDefault()

  const form = event.target
  const updateData = getFormFields(form)
  $('#editSubModal').modal('hide')

  api.updateSub(updateData)
    .then(ui.updateSubSuccess)
    .catch(ui.updateSubFailure)
}

const onGetSub = function (event) {
  event.preventDefault()

  const form = event.target
  const subData = getFormFields(form)
  console.log('you have a problem here? ', subData)

  api.getSub(subData)
    .then(ui.getSubSuccess)
    .catch(ui.getSubFailure)
}

const onDeleteSub = function (event) {
  event.preventDefault()

  const form = event.target

  const subData = getFormFields(form)

  $('#deleteSubModal').modal('hide')
  api.deleteSub(subData)
    .then(ui.deleteSubSuccess)
    .catch(ui.deleteSubFailure)
}

module.exports = {
  onCreateSub,
  onShowSubs,
  onUpdateSub,
  onGetSub,
  onDeleteSub
}
