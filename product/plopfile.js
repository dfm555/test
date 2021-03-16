const component = require('./plop/generators/component')
const page = require('./plop/generators/page')
const store = require('./plop/generators/store.json')

module.exports = function (plop) {
  plop.setGenerator('Component', component)
  plop.setGenerator('Page', page)
  plop.setGenerator('Store', store)
}
