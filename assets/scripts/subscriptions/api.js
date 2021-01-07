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

const updateSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + store.subscription._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
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

const deleteSub = function () {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + store.subscription._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createSub,
  updateSub,
  showSub,
  deleteSub
}
