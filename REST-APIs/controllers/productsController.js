import Joi from 'joi';
import multer from 'multer';
import { CustomErrorHandler } from '../services';
import { Products } from '../models';
import productFormat from '../validators/productFormat';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, 'uploads/'),
    filename: (req, file, callback) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random()*100)}Store${Math.round(Math.random()*1E3)}${path.extname(file.originalname)}`;
        callback(null, uniqueName);
    }
})

const handleData = multer({storage, limits: {fileSize: 1000000 * 10}});
const uploads = handleData.single('image');

const productsController = {
    async createproduct(req, res, next) {
        uploads(req, res, async (error1) => {
            if (error1) {
                return next(error1);
            }

            const filePath = req.file.path;
            const fileName = req.file.filename;
            
            const { error } = productFormat.validate(req.body);

            if (error) {
                fs.unlink(path.join(appRoot, filePath), (error2) => {
                    if (error2) {
                        return next(CustomErrorHandler.serverError());
                    }
                })
                return next(error);
            }
            const { name, price } = req.body;
            const productData = {
                name, price, imageName: fileName, imagePath: filePath
            }

            let saveProduct;
            try {
                saveProduct = await Products.create(productData);
            } catch(error3) {
                return next(error3);
            }  

            res.status(200).json(saveProduct);
        })
    },

    async updateproduct(req, res, next) {
        const productID = req.params.productID;
        uploads(req, res, async (error1) => {
            if (error1) {
                return next(error1);
            }

            let filePath, fileName;
            if (req.file) {
                filePath = req.file.path;
                fileName = req.file.filename;
            }

            const { error } = productFormat.validate(req.body);

            if (error) {
                if (req.file) {
                    fs.unlink(path.join(appRoot, filePath), (error) => {
                        if (error) {
                            return next(CustomErrorHandler.serverError());
                        }
                    })
                }
                return next(error);
            }

            const { name, price } = req.body;
            const productData = {
                name, price, ...(req.file && {imageName: fileName} && {imagePath: filePath})
            }

            let updateProduct;
            try {
                updateProduct = await Products.findOneAndUpdate({_id: productID}, productData, {new: false});
                if (req.file) {
                    const targetPath = path.join(appRoot, updateProduct._doc.imagePath);
                    fs.unlink(targetPath, (error3) => {
                        if (error3) {
                            return next(CustomErrorHandler.serverError());
                        }
                    });
                }
            } catch(error2) {
                return next(CustomErrorHandler.serverError(error2.message));
            }
            const updatedProduct = await Products.findOne({_id: productID}).select('-__v');
            res.status(200).json(updatedProduct);
        })
    },

    async deleteproduct(req, res, next) {
        const productID = req.params.productID;
        let productData;
        try {
            productData = await Products.findOneAndDelete({_id: productID});
            if (!productData) {
                return next(CustomErrorHandler.notFound("404 Product Not Found"));
            }
            const targetPath = path.join(appRoot, productData._doc.imagePath);
            fs.unlink(targetPath, (error) => {
                if (error) {
                    return next(CustomErrorHandler.serverError());
                }
            })
        } catch(error) {
            return next(CustomErrorHandler.notFound("404 Product Not Found"));
        }

        res.status(200).json({code: "Deleted Successfully"});
    },

    async getproduct(req, res, next) {
        const productID = req.params.productID;
        let productData;
        try {
            productData = await Products.findOne({_id: productID}).select('-__v');
            if (!productData) {
                return next(CustomErrorHandler.notFound("404 Product Not Found"));
            }
        } catch(error) {
            return next(error);
        }

        res.status(200).json(productData);
    },

    async getallproducts(req, res, next) {
        let allProducts;
        try {
            allProducts = await Products.find().sort({createdAt: -1}).select('-__v -createdAt');
        } catch(error) {
            return next(CustomErrorHandler.serverError());
        }
        
        res.status(200).json(allProducts);
    }
}

export default productsController;
