"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('executor function is called immediately', function () {
  var string;
  new _index.default(function () {
    string = 'foo';
  });
  expect(string).toBe('foo');
});