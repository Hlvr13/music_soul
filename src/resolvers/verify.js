import jwt from 'jsonwebtoken';
import User from '../schemas/user';

const secret = '7wBU9Bneb7ZhEUBX' // secret key
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ');

    let user = null;

    if(!payload){throw new Error('No token provided. Please verify your permissions')} // No token in Header
    
    if(prefix !== prefixToken){throw new Error('Invalid Header format.')}

    jwt.verify(payload,secret,(err,data) => {
        if(err){
            throw new Error('Invalid Token.')
        }else{
            user = User.findOne({'_id':data.id}).exec().then(res =>{
                return resolve(res);
            })
            .catch(err => {
                return reject(err)
            })
        }
    })

    if(!user){
        throw new Error('User does not exist in MongoDB.')
    }
}