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
    url: config.apiUrl + '/subscriptions/' + data.subscription.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showSubs = function () {
  return $.ajax({
    url: config.apiUrl + '/subscriptions',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const getSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + data.subscription.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + data.subscription.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createSub,
  updateSub,
  showSubs,
  getSub,
  deleteSub
}
