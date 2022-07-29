import jwt from 'jsonwebtoken';
import { JWT_SECRET, REFRESH_TOKEN_SECRET } from '../config'

class JWTService {
    static sign(payload) {
        const expiry = '600s';
        const secret = JWT_SECRET;
        return jwt.sign(payload, secret, {expiresIn: expiry});
    }
    static signforrefresh(payload) {
        const expiry = '1y';
        const secret = REFRESH_TOKEN_SECRET;
        return jwt.sign(payload, secret, {expiresIn: expiry});
    }
    static verify(payload) {
        const secret = JWT_SECRET;
        return jwt.verify(payload, secret);
    }
    static verifyrefresh(payload) {
        const secret = REFRESH_TOKEN_SECRET;
        return jwt.verify(payload, secret);
    }
}

export default JWTService;
