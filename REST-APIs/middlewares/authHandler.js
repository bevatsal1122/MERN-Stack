import { CustomErrorHandler, JWTService } from '../services';

const authHandler = async (req, res, next) => {
    const headers = req.headers;
    if (!headers.authorization) {
        return next(CustomErrorHandler.notAuthorized("No Header Found in Request"));
    }
    const Bearer = headers.authorization;
    const accessToken = Bearer.split(' ')[1];
    try {
        const { _id, dateOfBirth, role } = JWTService.verify(accessToken);
        const userAccount = {
            _id, dateOfBirth, role
        }
        req.userAccount = userAccount;
        next();
    } catch(error) {
        return next(CustomErrorHandler.notAuthorized("Invalid/Expired Access Token"));
    }
}

export default authHandler;
