import mongoose, { Schema } from "mongoose";

const artistasSchema= new mongoose.Schema({
    nombre: { type: String, required: true }, 
    genero: { type: String, required: true},
    pais: { type: String, required:true}
});

