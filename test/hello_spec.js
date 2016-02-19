/* globals describe it */

var assert = require('assert')
var hello = require('../lib/hello.js')
describe('hello test', function () {
  it('sayHello returns "hello :D"', function (done) {
    assert.equal('hello :D', hello.sayHello())
    done()
  })
})
