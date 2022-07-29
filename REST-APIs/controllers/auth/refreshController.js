import Joi from 'joi';
import { CustomErrorHandler, JWTService } from "../../services";
import { User, RefreshToken } from '../../models';

const refreshController = {
    async refreshaccess(req, res, next) {
        const refreshFormat = Joi.object({
            refreshToken: Joi.string().required()
        });

        const { error } = refreshFormat.validate(req.body);

        if (error) {
            return next(error);
        }

        const { refreshToken } = req.body;

        let accessToken;
        try {
            const isRefreshTokenActive = await RefreshToken.exists({refreshToken: refreshToken});
            if (!isRefreshTokenActive) {
                return next(CustomErrorHandler.notAuthorized("Invalid/Expired Refresh Token"));
            }
            let userID;
            try {
                const { _id } = JWTService.verifyrefresh(refreshToken);
                userID = _id;
            } catch(error) {
                return next(error);
            }
            let userData;
            try {
                userData = await User.findOne({_id: userID});
                if (!userData) {
                    return next(CustomElementRegistry.notFound("404 User Not Found"));
                }
            } catch(error) {
                return next(CustomElementRegistry.notFound("404 User Not Found"));
            }
            accessToken = JWTService.sign({
                _id: userData._id,
                dateOfBirth: userData.dateOfBirth,
                role: userData.role
            });
        } catch(error) {
            return next(error);
        }

        res.status(200).json({accessToken})
    }
}

export default refreshController;
