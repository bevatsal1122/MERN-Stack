import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
    email: {type: String,  required: true, unique: true},
    refreshToken: {type: String, required: true}
});

const RefreshToken = mongoose.model('RefreshTokens', refreshTokenSchema);

export default RefreshToken;