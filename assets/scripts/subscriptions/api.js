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
  const id = data.subscription.url
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
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
    url: config.apiUrl + '/subscriptions/' + data.subscription.url,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteSub = function (data) {
  return $.ajax({
    url: config.apiUrl + '/subscriptions/' + data.subscription.url,
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
