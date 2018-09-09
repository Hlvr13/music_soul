'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InstrumentInputType = exports.InstrumentType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var InstrumentType = exports.InstrumentType = new graphql.GraphQLObjectType({
    name: 'InstrumentType',
    description: 'InstrumentType in GraphQL',
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            name: {
                type: graphql.GraphQLString
            },
            strings: {
                type: graphql.GraphQLInt
            }
        };
    }
});

var InstrumentInputType = exports.InstrumentInputType = new graphql.GraphQLInputObjectType({
    name: 'InstrumentInputType',
    description: 'InstrumentInputType in GraphQL',
    fields: function fields() {
        return {
            name: {
                type: graphql.GraphQLString
            },
            strings: {
                type: graphql.GraphQLInt
            }
        };
    }
});