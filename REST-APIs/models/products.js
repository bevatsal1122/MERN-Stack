import mongoose from "mongoose";
import { DOMAIN } from '../config';

const productSchema = new mongoose.Schema({
    name: {type: String,  required: true},
    price: {type: String,  required: true},
    imageName: {type: String, required: true},
    imagePath: {type: String, required: true, get: (imagePath) => {
        const fileName = imagePath.slice(8);
        return `${DOMAIN}/uploads/${fileName}`;
    }}
}, {timestamps: true, toJSON: { getters: true, virtuals: false }});

const Products = mongoose.model('Products', productSchema);

export default Products;
