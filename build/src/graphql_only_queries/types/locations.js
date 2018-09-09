'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocationInputType = exports.LocationType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LocationType = exports.LocationType = new graphql.GraphQLObjectType({
    name: 'LocationType',
    description: 'LocationType in GraphQL',
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            country: {
                type: graphql.GraphQLString
            },
            state: {
                type: graphql.GraphQLString
            },
            city: {
                type: graphql.GraphQLString
            }
        };
    }
});

var LocationInputType = exports.LocationInputType = new graphql.GraphQLInputObjectType({
    name: 'LocationInputType',
    description: 'LocationInputType in GraphQL',
    fields: function fields() {
        return {
            country: {
                type: graphql.GraphQLString
            },
            state: {
                type: graphql.GraphQLString
            },
            city: {
                type: graphql.GraphQLString
            }
        };
    }
});