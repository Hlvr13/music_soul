'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _genres = require('../../types/genres');

var _genres2 = require('../../../schemas/genres');

var _genres3 = _interopRequireDefault(_genres2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _genres.GenreType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_genres.GenreInputType)
        }
    },
    resolve: function resolve(root, params) {
        var genre = new _genres3.default(params.data);
        var newGenre = genre.save();
        if (!newGenre) throw new Error('Error at creating genre');
        return newGenre;
    }
};