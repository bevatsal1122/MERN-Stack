import express from 'express';
import { registerController, loginController, userController, refreshController, logoutController, productsController } from '../controllers';
import authHandler from '../middlewares/authHandler';
import adminChecker from '../middlewares/adminChecker';
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/useraccount', authHandler, userController.useraccount);
router.post('/refreshaccess', refreshController.refreshaccess);
router.post('/logout', authHandler, logoutController.logout);
router.post('/products/createproduct', [authHandler, adminChecker], productsController.createproduct);
router.put('/products/updateproduct/:productID',  [authHandler, adminChecker], productsController.updateproduct);
router.delete('/products/deleteproduct/:productID',  [authHandler, adminChecker], productsController.deleteproduct);
router.get('/products/:productID', authHandler, productsController.getproduct);
router.get('/products', authHandler, productsController.getallproducts);

// Create, Update & Delete Operations only allowed for Admin Role
// Active Access Token required for all Product related Requests
// Active Refresh Token required for generating new Accesss Tokens

export default router;
