'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// select DOM
const subInput = document.querySelector('.sub-input')
const subButton = document.querySelector('.sub-button')
const subList = document.querySelector('.sub-list')

const onCreateSub = function (event) {
  event.preventDefault()
  $('#sign-out').show()

  const form = event.target
  const subData = getFormFields(form)

  console.log('data is ', subData)

  const subArray = []

  console.log('sub array is', subArray)

  subArray.push(subData)

  const subHTML = (`
  <div>
    <h4>Name: ${subData.subscription.name}</h4>
    <p>Start Date: ${subData.subscription.start}</p>
    <p>End Date: ${subData.subscription.end}</p>
    <p>Owner: ${subData.subscription.owner}</p>
  </div>`)

  subList.insertAdjacentHTML('beforeend', subHTML)
  subInput.focus()

  api.createSub(subData)
    .then(ui.createSubSuccess)
    .catch(ui.createSubFailure)
}

// show index all subs

const onShowSubs = function (event) {
  event.preventDefault()
  $('.sub-list').hide()
  api.showSubs()
    .then(ui.showSubsSuccess)
    .catch(ui.showSubsFailure)
}

const onUpdateSub = function (event) {
  event.preventDefault()

  const form = event.target
  const updateData = getFormFields(form)

  api.updateSub(updateData)
    .then(ui.updateSubSuccess)
    .catch(ui.updateSubFailure)
}

const onGetSub = function (event) {
  event.preventDefault()

  const form = event.target
  const subData = getFormFields(form)

  api.getSub(subData)
    .then(ui.getSubSuccess)
    .catch(ui.getSubFailure)
}

const onDeleteSub = function (event) {
  event.preventDefault()

  const form = event.target

  const subData = getFormFields(form)

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
