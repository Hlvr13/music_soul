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

var querySingleUser = {
    type: _user.UserType, //Se utiliza type NO types.
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var user = _user3.default.findById(params.id).exec();
        return user;
    }
};

exports.default = querySingleUser;