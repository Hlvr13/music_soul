'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_instrument.InstrumentInputType)
        }
    },
    resolve: function resolve(root, params) {
        var instrument = new _instrument3.default(params.data);
        var newInstrument = instrument.save();
        if (!newInstrument) throw new Error('Error at creating instrument');
        return newInstrument;
    }
};