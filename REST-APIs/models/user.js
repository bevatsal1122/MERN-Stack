import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    email: {type: String,  required: true, unique: true},
    password: {type: String,  required: true},
    dateOfBirth: {type: String, required: true},
    role: {type: String,  default: 'customer'}
}, {timestamps: true});

const User = mongoose.model('Users', userSchema);

export default User;
