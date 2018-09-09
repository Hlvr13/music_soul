'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _instrument = require('./instrument');

var _instrument2 = require('../../schemas/instrument');

var _instrument3 = _interopRequireDefault(_instrument2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UserType = exports.UserType = new graphql.GraphQLObjectType({
    name: 'UserType',
    description: 'UsersType DB',
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            firstName: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },

            password: {
                type: graphql.GraphQLString
            },
            instrument: {
                type: _instrument.InstrumentType,
                resolve: function resolve(user) {
                    var instrument = user.instrument;

                    return _instrument3.default.findById(instrument).exec();
                }
            },
            genre: {
                type: graphql.GraphQLString
            },
            location: {
                type: graphql.GraphQLString
            },
            photo: {
                type: graphql.GraphQLString
            },
            urlYT: {
                type: graphql.GraphQLString
            },
            urlTW: {
                type: graphql.GraphQLString
            },
            urlFB: {
                type: graphql.GraphQLString
            }
        };
    }
});

var UserInputType = exports.UserInputType = new graphql.GraphQLInputObjectType({
    name: 'UserInputType',
    description: 'User Input Type DB',
    fields: function fields() {
        return {
            firstName: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },
            password: {
                type: graphql.GraphQLString
            },
            instrument: {
                type: graphql.GraphQLString
            },
            genre: {
                type: graphql.GraphQLString
            },
            location: {
                type: graphql.GraphQLString
            },
            photo: {
                type: graphql.GraphQLString
            },
            urlYT: {
                type: graphql.GraphQLString
            },
            urlTW: {
                type: graphql.GraphQLString
            },
            urlFB: {
                type: graphql.GraphQLString
            }
        };
    }
});