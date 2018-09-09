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

var queryAllGenres = {
    type: new graphql.GraphQLList(_genres.GenreType),
    resolve: function resolve() {
        var genres = _genres3.default.find().exec();
        if (!genres) throw Error('Error at fetching genres.');
        return genres;
    }
};

exports.default = queryAllGenres;