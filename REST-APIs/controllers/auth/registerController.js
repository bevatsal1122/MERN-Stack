import Joi from 'joi';
import bcrypt from 'bcrypt';
import { User } from '../../models';
import { CustomErrorHandler, JWTService } from '../../services';

const registerController = {
    async register(req, res, next) {
        const registerFormat = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().min(4).max(30).required(),
            password: Joi.string().min(8).max(20).required(),
            confirm_password: Joi.ref('password'),
            dateOfBirth: Joi.string().length(10).required(),
            role: Joi.string().min(5).max(8).optional(),
        });

        const { error } = registerFormat.validate(req.body);

        if (error) {
            return next(error);
        }

        const { name, email, password, dateOfBirth } = req.body;
        try {
            const sameEmail = await User.exists({email: email});
            if (sameEmail) {
                return next(CustomErrorHandler.emailExists("Email ID already exists"));
            }
        } catch(error) {
            return next(CustomErrorHandler.serverError());
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name, email, password: hashedPassword, dateOfBirth
        });

        let accessToken;
        try {
            const saveUser = await user.save();
            accessToken = JWTService.sign({_id: saveUser._id, dateOfBirth, role: saveUser.role});
        } catch(error) {
            return next(error);
        }

        res.status(200).json({accessToken});
    }
}

export default registerController;
