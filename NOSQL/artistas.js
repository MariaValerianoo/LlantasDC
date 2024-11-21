import { artistasModel } from "../Model/artistasModel.js";

export const crearArtista= async(peticion, respuesta) =>{
    try {
        const artista = pet.body;

        if (!Array.isArray(artista)){
        return resp.status(400).json("error", { error: 'El cuerpo de la solicitud debe ser un array de artistas' });
        }
        await productModel.insertMany(artista);
        const todosArtistas = await artistasModel.find();

        resp.status(201).json("artistas", { artista: todosArtistas });
    } catch (error) {
        console.log(error);
    }
};

export const buscarArtistasPais = async (peticion, respuesta) =>{
    try {
        const pais= peticion.body 
        if(!pais){
            respuesta.status(400).json({message:"Se requiere un pais"})
        }
        const artistasPais= await artistasModel.findMany()
        respuesta.status(200).json("artistas",{artistasPais})
    } catch (error) {
        console.log(error)
    }
};

export const buscarArtista= async(peticion, respuesta)=>{
    try {
        const album= await artistasModel.find();
        respuesta.status(200).json("artistas",{artista})
    } catch (error) {
        console.log(error)
    }
};