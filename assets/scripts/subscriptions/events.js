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
  const data = getFormFields(form)

  let ourHTML = `<li>${data.subscription.name} <button id="sub-delete">Delete</button></li>`

  console.log('data is ', data)

  subList.insertAdjacentHTML('beforeend', ourHTML)
  subInput.focus()
  // sub DIV
  // const subDiv = document.createElement('div')
  // subDiv.classList.add('sub')
  // // create li
  // const newSub = document.createElement('li')
  // newSub.innerText = data.subscription.name
  // newSub.classList.add('sub-item')
  // subDiv.appendChild(newSub)
  //
  // // check mark button
  // const completeButton = document.createElement('button')
  // completeButton.innerHTML = 'Complete'
  // completeButton.classList.add('complete-btn')
  // subDiv.appendChild(completeButton)
  // // check trash button
  // const trashButton = document.createElement('button')
  // trashButton.innerHTML = 'Delete'
  // trashButton.classList.add('trash-btn')
  // subDiv.appendChild(trashButton)
  //
  // // append to list
  // subList.appendChild(subDiv)

  api.createSub(data)
    .then(ui.createSubSuccess)
    .catch(ui.createSubFailure)
}

const onDeleteSub = function (event) {
  event.preventDefault()

  const form = event.target

  const subData = getFormFields(form)
  // const item = event.target
  // const subData = getFormFields(item)
  // console.log(item)
  // // delete item
  // if(item.classList[0] === 'trash-btn') {
  //   const sub = item.parentElement
  //   // add animation
  //   sub.classList.add('fall')
  //   sub.addEventListener('transitionend', function () {
  //     sub.remove()
  //   })
  alert('Deleted')

  // if (item.classList[0] === 'complete-btn') {
  //   const sub = item.parentElement
  //   sub.classList.toggle('completed')
  //   console.log(sub)
  // }

  api.deleteSub(subData)
    .then(ui.deleteSubSuccess)
    .catch(ui.deleteSubFailure)
}

// const onCompleteSub = function (event) {
//   event.preventDefault()
//   const item = event.target
//   const subData = getFormFields(item)
//   console.log(item)
//   // check mark item
//
// }

module.exports = {
  onCreateSub,
  onDeleteSub
  // onCompleteSub
  // onPlayTurn,
  // onShowGames
}
