'use strict'

const store = require('./../store')
const config = require('./../config')

const createSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const updateSub = function (cellIndex, currentValue) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + store.subscription._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      subscription: {
        cell: {
          index: cellIndex,
          // currentValue
          value: currentValue
        }
      }
    }
  })
}

const showSub = function () {
  return $.ajax({
    url: config.apiUrl + '/subscriptions',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + store.subscriptions._id,
    method: 'DELETE'
  })
}

module.exports = {
  createSub,
  updateSub,
  showSub,
  deleteSub
}
