import { User } from '../../models';
import { CustomErrorHandler } from '../../services';

const userController = {
    async useraccount(req, res, next) {
        let userData;
        try {
            userData = await User.findOne({_id: req.userAccount}).select('-password -__v -createdAt -updatedAt');
            if (!userData) {
                return next(CustomErrorHandler.notFound("404 User Not Found"));
            }
        } catch(error) {
            return next(error);
        }
        res.status(200).json(userData);
    }
}

export default userController;
