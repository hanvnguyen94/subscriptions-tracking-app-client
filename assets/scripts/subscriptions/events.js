'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateSub = function (event) {
  event.preventDefault()
  $('#sign-out').show()

  // const subButton = document.querySelector('.sub-button')
  const subList = document.querySelector('.sub-list')

  const form = event.target
  const data = getFormFields(form)

  console.log('data is ', data)
  // sub DIV
  const subDiv = document.createElement('div')
  subDiv.classList.add('sub')
  // create li
  const newSub = document.createElement('li')
  newSub.innerText = data.subscription.name
  newSub.classList.add('sub-item')
  subDiv.appendChild(newSub)

  // check mark button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add('complete-btn')
  subDiv.appendChild(completedButton)
  // check trash button
  const trashButton = document.createElement('button')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add('trash-btn')
  subDiv.appendChild(trashButton)

  // append to list
  subList.appendChild(subDiv)

  api.createSub(data)
    .then(ui.createSubSuccess)
    .catch(ui.createSubFailure)
}

module.exports = {
  onCreateSub
  // onPlayTurn,
  // onShowGames
}
