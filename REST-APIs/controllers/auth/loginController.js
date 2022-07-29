import Joi from 'joi';
import bcrypt from 'bcrypt';
import { User, RefreshToken } from '../../models';
import { CustomErrorHandler, JWTService } from '../../services';

const loginController = {
    async login(req, res, next) {
        const loginFormat = Joi.object({
            email: Joi.string().email().min(4).max(30).required(),
            password: Joi.string().min(8).max(20).required()
        });

        const { error } = loginFormat.validate(req.body);

        if (error) {
            return next(error);
        }

        const { email, password } = req.body;
        let  authStatus;
        try {
            const userData = await User.findOne({email: email});
            if (!userData) {
                return next(CustomErrorHandler.notFound("404 User Not Found"));
            }
            const hashedPassword = userData.password;
            const userAuth = await bcrypt.compare(password, hashedPassword);
            if (!userAuth) {
                return next(CustomErrorHandler.wrongCredentials("Wrong Password"));
            }
            const accessToken = JWTService.sign({
                _id: userData._id,
                dateOfBirth: userData.dateOfBirth,
                role: userData.role
            });
            let refreshToken;
            const lastRefreshToken = await RefreshToken.findOne({email: email});
            if (lastRefreshToken) refreshToken = lastRefreshToken.refreshToken;
            else {
                refreshToken = JWTService.signforrefresh({
                    _id: userData._id,
                    dateOfBirth: userData.dateOfBirth,
                    role: userData.role
                });
                await RefreshToken.create({email, refreshToken: refreshToken});
            }
            
            authStatus = {
                code: "Login Successfull",
                accessToken, refreshToken
            }
        } catch(error) {
            return next(error);
        }

        res.status(200).json(authStatus);
    }
}

export default loginController;
