import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltFactor = 10;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    'firstName':{
        type: String,
        required: true
    },
    'lastName':{
        type: String,
        required: true
    },
    'email':{
        type: String,
        required: true
    },
    'phone':{
        type: String,
        required: true
    },
    'password':{
        type: String,
        required: true
    },
    'instrument':{
        type: Schema.Types.ObjectId,
        required: false,
        default: null
    },
    'genre':{
        type: String,
        required: false,
        default: ''
    },
    'location':{
        type: String,
        required: false,
        default: ''
    },
    'photo':{
        type: String,
        required: false,
        default: ''
    },
    'urlYT':{
        type: String,
        required: false,
        default: ''
    },
    'urlTW':{
        type: String,
        required: false,
        default: ''
    },
    'urlFB':{
        type: String,
        required: false,
        default: ''
    }
},{'collections':'users',timestamps:true})


//Password Hash
//Se realiza antes del save realizado en main index.js
userSchema.pre('save', function(next){
    var user = this;

    //Solo si el usuario modifica
    if(!user.isModified('password')){return next()}

    //Generacion de Salt
    bcrypt.genSalt(saltFactor, function(err,salt){  //Importa el orden de variables en la funcion
        if(err) throw next(err);

        //Metodo Hash de Bcrypt
        bcrypt.hash(user.password, salt, function(err,hash){
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

export default mongoose.model('users', userSchema);