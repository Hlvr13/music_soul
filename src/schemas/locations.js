import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LocationSchema = new Schema ({

    country: {
        type: 'String',
        require: true
    },
    state: {
        type:String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
},{'collection' : 'locations', timestamps : true});

    export default mongoose.model('locations', LocationSchema) 