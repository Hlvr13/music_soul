import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    strings: {
        type: Number,
        required: false,
        default: 0
    }
},{'collections':'instruments',timestamps:true})

export default mongoose.model('instruments',instrumentSchema);