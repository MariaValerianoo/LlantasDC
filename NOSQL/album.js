import { albumModel } from "../Model/albumModel.js";

export const crearAlbum= async(peticion, respuesta) =>{
    try {
        const album = pet.body;

        if (!Array.isArray(album)){
        return resp.status(400).json("error", { error: 'El cuerpo de la solicitud debe ser un array de albums' });
        }
        await productModel.insertMany(album);
        const todosAlbums = await albumModel.find();

        resp.status(201).json("albums", { album: todosAlbums });
    } catch (error) {
        console.log(error);
    }
};


export const buscarAlbum= async(peticion, respuesta)=>{
    try {
        const album= await albumModel.find();
        respuesta.status(200).json("album",{album})
    } catch (error) {
        console.log(error)
    }
};

export const actualizarAlbum= async (peticion, respuesta) =>{
    try {
        const nombre = peticion.params
        const nuevoaño= peticion.body 
        if(!nuevoaño | ! nombre){
            respuesta.status(400).json({message:"Se requiere el año y nombre"});
        }
        const actualizarAlbum= await albumModel.findAndUpdate({nombre:{nombre},año:{nuevoaño}});
        respuesta.status(200).json({message:"Se actualizo el año"}, {album: actualizarAlbum})
    } catch (error) {
        console.log(error)
    }
};

export const eliminarAlbum= async (peticion,respuesta) =>{
    try {
        const nombre = peticion.body
        const eliminarAlbum = await albumModel.findAndDelete()
        respuesta.status(200).json({message:"Album eliminado"})
    } catch (error) {
        console.log(error)
    }
}


  