import mongoose, { Schema } from "mongoose";

const albumSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    año: {type: Date, required:true}
});