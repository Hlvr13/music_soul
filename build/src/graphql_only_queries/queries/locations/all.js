'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _locations = require('../../types/locations');

var _locations2 = require('../../../schemas/locations');

var _locations3 = _interopRequireDefault(_locations2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllLocations = {
    type: new graphql.GraphQLList(_locations.LocationType),
    resolve: function resolve() {
        var locations = _locations3.default.find().exec();
        if (!locations) throw Error('Error at fetching locations');
        return locations;
    }
};

exports.default = queryAllLocations;