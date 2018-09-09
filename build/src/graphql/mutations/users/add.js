'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _user = require('../../types/user');

var _user2 = require('../../../schemas/user');

var _user3 = _interopRequireDefault(_user2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _user.UserType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_user.UserInputType)
        }
    },
    resolve: function resolve(root, params) {
        var user = new _user3.default(params.data);
        var newUser = user.save();
        if (!newUser) throw new Error('Error at creating new user.');
        return newUser;
    }
};