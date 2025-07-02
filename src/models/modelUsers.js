import { match } from 'assert';
import { Schema, model} from 'mongoose';

const schemaUser = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {
        type: String, 
        required: true,
        match:[/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/],
        trim: true,
        minlength: [7, 'The password must have at least seven chaaracters'],
         match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_\-]).{7,10}$/]
    },
    
});

export default model ('User', schemaUser);