import { CustomErrorHandler } from "../services";
import { User } from '../models';

const adminChecker = async (req, res, next) => {
    try {
        const userData = await User.findOne({_id: req.userAccount});
        if (!userData) {
            return next(CustomErrorHandler.notFound("404 User Not Found"));
        }
        if (userData.role === 'admin') {
            next();
        } else {
            return next(CustomErrorHandler.notAuthorized("Only Admin User Allowed for Product Operations"));
        }
    } catch(error) {
        return next(error);
    }
    
}

export default adminChecker;
