'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _graphql_only_queries = require('./src/graphql_only_queries');

var _graphql_only_queries2 = _interopRequireDefault(_graphql_only_queries);

var _verify = require('./src/resolvers/verify');

var _create = require('./src/resolvers/create');

var _user = require('./src/schemas/user');

var _user2 = _interopRequireDefault(_user);

var _instrument = require('./src/schemas/instrument');

var _instrument2 = _interopRequireDefault(_instrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonParser = _bodyParser2.default.json();
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
var mLabUrl = 'mongodb://lvr:CRackiamjiWew6U@ds018558.mlab.com:18558/music_soul'; //Modificar user name y password por algo mas seguro.

app.listen(PORT, function () {
    console.log('Server at PORT: ' + PORT);
});

app.use((0, _cors2.default)());

_mongoose2.default.connect(mLabUrl, { useNewUrlParser: true });

_mongoose2.default.connection.on('error', function () {
    console.log('Failed to connect at mLab: ' + mLabUrl);
}).once('open', function () {
    console.log('Connected to mLab.');
});

app.get('/', function (req, res) {
    res.send('Server Working.');
});

//Login Enpoint: creates token.
app.use('/login', jsonParser, function (req, res) {
    if (req.method === 'POST') {
        //Creates Token 
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            res.status(403).json({
                message: 'Login failed. Invalid Credentials.'
            });
        });
    }
});

//Middleware: verifies token.
app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization']; //.headers not .header
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (e) {
        res.status(401).json({
            message: e.message
        });
    }
});

//Uso de graphiql para utilizar queries y mutations//
app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default, //Es necesario que se llame 'schema', no se puede nombrar diferente debido a que causa error.
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));

app.post('/register', jsonParser, function (req, res) {
    var user = new _user2.default(req.body);

    user.save(function (err) {
        if (err) throw err;
        res.send('Usuario Registrado');
    });
});

app.use('/graphql_Only_Queries', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql_only_queries2.default, //Es necesario que se llame 'schema', no se puede nombrar diferente debido a que causa error.
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));