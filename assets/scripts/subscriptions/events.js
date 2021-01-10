'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateSub = function (event) {
  event.preventDefault()
  $('#sign-out').show()

  const form = event.target
  const subData = getFormFields(form)

  console.log('data is ', subData)
  $('#addNewModal').modal('hide')

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
