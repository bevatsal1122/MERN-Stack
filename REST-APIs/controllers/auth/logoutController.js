import Joi from 'joi';
import { RefreshToken } from '../../models';
import { CustomErrorHandler } from '../../services';


const logoutController = {
    async logout(req, res, next) {
        const deleteRefreshFormat = Joi.object({
            refreshToken: Joi.string().required()
        });

        const { error } = deleteRefreshFormat.validate(req.body);

        if (error) {
            return next(error);
        }
        
        const { refreshToken } = req.body;
        try {
            const delRefreshToken = await RefreshToken.deleteOne({refreshToken: refreshToken});
            if (delRefreshToken.deletedCount === 0) {
                return next(CustomErrorHandler.notAuthorized("Invalid/Expired Refresh Token"));
            }
        } catch(error) {
            return next(error);
        }
        res.status(200).json({code: "Logout Successfull"});
    }
}

export default logoutController;
