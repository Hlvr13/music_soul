'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _instrument = require('../../types/instrument');

var _instrument2 = require('../../../schemas/instrument');

var _instrument3 = _interopRequireDefault(_instrument2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    type: _instrument.InstrumentType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_instrument.InstrumentInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _instrument3.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (instrument) {
            return _instrument3.default.findById(instrument.id).exec();
        }).catch(function (err) {
            return new Error('Could not update Instrumenent Data', err);
        });
    }
};