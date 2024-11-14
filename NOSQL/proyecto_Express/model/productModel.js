import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    categoria: String,
    stock: { type: Boolean, default: true }
})
  
export const productModel = new mongoose.model('Productos', productSchema)