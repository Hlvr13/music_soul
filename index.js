import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import schema from './src/graphql';
import { verifyToken } from './src/resolvers/verify';
import { createToken } from './src/resolvers/create';

import User from './src/schemas/user';
import Instrument from './src/schemas/instrument';

const jsonParser = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 3000;
const mLabUrl = 'mongodb://lvr:CRackiamjiWew6U@ds018558.mlab.com:18558/music_soul'; //Modificar user name y password por algo mas seguro.

app.listen(PORT, () => {
    console.log(`Server at PORT: ${PORT}`);
})

app.use((cors()));

mongoose.connect(mLabUrl,{useNewUrlParser:true});

mongoose.connection.on('error', () => {
    console.log(`Failed to connect at mLab: ${mLabUrl}`);
}).once('open', () => {
    console.log('Connected to mLab.')
})

app.get('/', (req,res) => {
    res.send('Server Working.');
})

//Login Enpoint: creates token.
app.use('/login',jsonParser,(req,res) => {
    if(req.method === 'POST'){
        //Creates Token 
        const token = createToken(req.body.email,req.body.password).then((token) => {
            res.status(200).json({token});
        })
        .catch((err) => {
            res.status(403).json({
                message: 'Login failed. Invalid Credentials.'
            })
        })
    }
})

 

//Middleware: verifies token.
app.use('/graphql', (req,res,next) => {
    const token = req.headers['authorization'];  //.headers not .header
    try{
        req.user = verifyToken(token);
        next();
    }catch(e){
        res.status(401).json({
            message: e.message
        })
    }
})

//Uso de graphiql para utilizar queries y mutations//
app.use('/graphql', expressGraphQL((req,res) => ({
    schema,      //Es necesario que se llame 'schema', no se puede nombrar diferente debido a que causa error.
    graphiql: true,
    pretty: true,
    context:{
        user: req.user
    }
})))

app.post('/register', jsonParser, (req,res)=> {
    var user = new User(req.body);

    user.save((err)=>{
        if(err) throw err;
        res.send('Usuario Registrado');

    })
})