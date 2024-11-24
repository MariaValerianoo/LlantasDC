import { clienteModel } from "../model/clienteModel.js";

//Funcion obtener datos
export const obtenerClientes = async (peticion, respuesta) => {
    try {
        let usuarios = await userModel.find()
        respuesta.status(200).json("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}

//Funcion crear cliente
export const crearCliente = async (peticion, respuesta) => {
    try {
        const clientes = peticion.body;

        if (!Array.isArray(clientes)) {
        return respuesta.status(400).render("error", { error: 'La solicitud debe ser una lista de clientes' });
        }
        await userModel.insertMany(clientes);
        const todosLosClientes = await userModel.find();
        res.status(201).render("index", { clientes: todosLosClientes });

    } catch (error) {
        console.log(error);
    }
}

//buscar cliente por nombre tercero
export const buscarClienteTercero = async (peticion,respuesta) => {
    try {
        const cliente = await userModel.findOne({ nombretercero: peticion.params.nombretercero });
        if (cliente) {
          respuesta.status(200).json(cliente);
        } else {
          respuesta.status(404).json({ message: "No se pudo encontrar al cliente " });
        }
    } catch (error) {
        console.log(error);
    }
}

//buscar cliente por ciudad 
export const buscarClienteCiudad = async (peticion,respuesta) => {
    try {
        const cliente = await userModel.findOne({ ciudad: peticion.params.ciudad });
        if (cliente) {
          respuesta.status(200).json(cliente);
        } else {
          respuesta.status(404).json({ message: "No se pudo encontrar al cliente " });
        }
    } catch (error) {
        console.log(error);
    }
}

//buscar cliente por direccion 
export const buscarClienteDireccion = async (peticion,respuesta) => {
    try {
        const cliente = await userModel.findOne({ direccion: peticion.params.direccion });
        if (cliente) {
          respuesta.status(200).json(cliente);
        } else {
          respuesta.status(404).json({ message: "No se pudo encontrar al cliente " });
        }
    } catch (error) {
        console.log(error);
    }
}

//cuantos clientes hay
export const contarCliente = async(peticion,respuesta) => {
    try {
        const cantidadClientes = await userModel.countDocuments();
        if(cantidadClientes){
            respuesta.status(200).json(cantidadClientes);
        }
    } catch (error) {
        console.log(error);
    }
}

//Buscar clientes por telefono que tengan un numero en especifico
export const buscarClienteLikeTelefono = async(peticion,respuesta) => {
    try {
        const numero = peticion.params;
        const clienteEncontrado = await userModel.findMany({telefono: { $regex: numero, $options: 'i' }});
        
        if(clienteEncontrado){
            respuesta.status(200).json(clienteEncontrado);
        } else {
            respuesta.status(404).json({message: "Cliente no encontrado"});
        }
    } catch (error) {
        console.log(error);
    }
}

//cambiar nombre de tercero por el rut del cliente 
export const cambiarTerceroRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevonombretercero= peticion.body;

        if(!rut || !nuevonombretercero){
            return respuesta.satus(400).json({message:"Se necesitan rut y nombre de tercero"});
        }
        const nombreTerceroActualizado= await userModel.findByIdAndUpdate({rut},{nombretercero:nuevonombretercero},{new:true});

        if(!nombreTerceroActualizado){
            return respuesta.satus(400).json({message:"cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Nombre tercero actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar direccion por el rut del cliente
export const cambiarDireccionRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevadireccion= peticion.body;

        if(!rut || !nuevadireccion){
            return respuesta.satus(400).json({message:"Se necesitan rut y direccion"});
        }
        const direccionActualizado= await userModel.findByIdAndUpdate({rut},{direccion:nuevadireccion},{new:true});

        if(!direccionActualizado){
            return respuesta.satus(400).json({message:"cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Direccion actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar telefono por el rut del cliente 
export const cambiarTelefonoRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevotelefono= peticion.body;

        if(!rut || !nuevotelefono){
            return respuesta.satus(400).json({message:"Se necesitan rut y telefono"});
        }
        const telefonoActualizado= await userModel.findByIdAndUpdate({rut},{telefono:nuevotelefono},{new:true});

        if(!telefonoActualizado){
            return respuesta.satus(400).json({message:"cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Telefono actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar ciudad por el rut del cliente 
export const cambiarCiudadRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevaciudad= peticion.body;

        if(!rut || !nuevaciudad){
            return respuesta.satus(400).json({message:"Se necesitan rut y ciudad"});
        }
        const ciudadActualizado= await userModel.findByIdAndUpdate({rut},{ciudad:nuevaciudad},{new:true});

        if(!ciudadActualizado){
            return respuesta.satus(400).json({message:"cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Ciudad actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar nombre por el rut del cliente 
export const cambiarNombreRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevonombre= peticion.body;

        if(!rut || !nuevonombre){
            return respuesta.satus(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombreActualizado= await userModel.findByIdAndUpdate({rut},{nombre:nuevonombre},{new:true});

        if(!nombreActualizado){
            return respuesta.satus(400).json({message:"cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Nombre actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}

//eliminar cliente por id 
export const eliminarClienteRut = async(peticion,respuesta)=>{
    try {
        const rut= peticion.paramns;
        if(!rut){
            return respuesta.status(400).json({message:"Se necesita un RUT"});
        }
        const clienteEliminado= await clienteModel.findByAndDelete({rut});
        if(!clienteEliminado){
            return respuesta.status(404).json({message:"Cliente no encontrado"});
        }
        respuesta.status(200).json({message:"Cliente eliminado"})
    } catch (error) {
        console.log(error);
    }
}

//MODIFICACIONES 

//cambiar nombre de tercero por rut cliente 
export const nombreTerceroRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevonombre= peticion.body;

        if(!rut || !nuevonombre){
            return respuesta.satus(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombreActualizado= await userModel.findByIdAndUpdate({rut},{nombreTercero:nuevonombre},{new:true});
        if(!nombreActualizado){
            return respuesta.satus(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"Nombre de tercero actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar direccion 
export const direccionRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevadireccion= peticion.body;

        if(!rut || !nuevadireccion){
            return respuesta.satus(400).json({message:"Se necesitan rut y direccion"});
        }
        const direccionActualizada= await userModel.findByIdAndUpdate({rut},{direccion:nuevadireccion},{new:true});

        if(!direccionActualizada){
            return respuesta.satus(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"direccion actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar telefono 
export const telefonoRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevotelefono= peticion.body;

        if(!rut || !nuevotelefono){
            return respuesta.satus(400).json({message:"Se necesitan rut y telefono"});
        }
        const telefonoActualizado= await userModel.findByIdAndUpdate({rut},{telefono:nuevotelefono},{new:true});

        if(!telefonoActualizado){
            return respuesta.satus(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"telefono actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}
//cambiar ciudad 
export const ciudadRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevaciudad= peticion.body;

        if(!rut || !nuevaciudad){
            return respuesta.satus(400).json({message:"Se necesitan rut y ciudad"});
        }
        const ciudadActualizada= await userModel.findByIdAndUpdate({rut},{ciudad:nuevaciudad},{new:true});

        if(!ciudadActualizada){
            return respuesta.satus(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"ciudad actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar nombrecontacto
export const nombreContactoRut = async(peticion,respuesta)=>{
    try {
        const rut = peticion.params;
        const nuevonombrec= peticion.body;

        if(!rut || !nuevonombrec){
            return respuesta.satus(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombrecActualizado= await userModel.findByIdAndUpdate({rut},{nombreContacto:nuevonombrec},{new:true});
        if(!nombrecActualizado){
            return respuesta.satus(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"Nombre de contacto actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}