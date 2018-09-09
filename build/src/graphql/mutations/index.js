'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _instruments = require('./instruments');

var _instruments2 = _interopRequireDefault(_instruments);

var _location = require('./location');

var _location2 = _interopRequireDefault(_location);

var _genres = require('./genres');

var _genres2 = _interopRequireDefault(_genres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _users2.default, _instruments2.default, _location2.default, _genres2.default);