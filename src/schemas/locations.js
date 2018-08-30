import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LocationSchema = new Schema ({

    'Country': {
        type: 'String',
        require: true
    },
    'State': {
        type:String,
        require: true
    },
    'City': {
        type: String,
        require: true
    }
},{'collection' : 'locations', timestamps : true});

    export default mongoose.model('locations', LocationSchema) 