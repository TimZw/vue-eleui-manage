'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', //开发环境
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"', // API
  BASE_API: '"http://localhost:6500"'
})
