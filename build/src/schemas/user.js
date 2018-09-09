'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saltFactor = 10;
var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    'firstName': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'phone': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    },
    'instrument': {
        type: Schema.Types.ObjectId,
        required: false,
        default: null
    },
    'genre': {
        type: String,
        required: false,
        default: ''
    },
    'location': {
        type: String,
        required: false,
        default: ''
    },
    'photo': {
        type: String,
        required: false,
        default: ''
    },
    'urlYT': {
        type: String,
        required: false,
        default: ''
    },
    'urlTW': {
        type: String,
        required: false,
        default: ''
    },
    'urlFB': {
        type: String,
        required: false,
        default: ''
    }
}, { 'collections': 'users', timestamps: true });

//Password Hash
//Se realiza antes del save realizado en main index.js
userSchema.pre('save', function (next) {
    var user = this;

    //Solo si el usuario modifica
    if (!user.isModified('password')) {
        return next();
    }

    //Generacion de Salt
    _bcrypt2.default.genSalt(saltFactor, function (err, salt) {
        //Importa el orden de variables en la funcion
        if (err) throw next(err);

        //Metodo Hash de Bcrypt
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

exports.default = _mongoose2.default.model('users', userSchema);