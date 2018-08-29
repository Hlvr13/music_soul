import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema ({

    'Name': {
        type:String,
        require:true
    },
    'Description': {
        type:String,
        require:true
    }
},{'collection': 'genres', timestamps: true});

export default mongoose.model('genres',GenreSchema)
