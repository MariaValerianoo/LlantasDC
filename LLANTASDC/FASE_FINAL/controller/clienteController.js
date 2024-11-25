import { clienteModel } from "../model/clienteModel.js";

//Funcion obtener datos
export const obtenerClientes = async (peticion, respuesta) => {
    try {
        let usuarios = await clienteModel.find()
        respuesta.status(200).json("index", { usuarios })
    } catch (error) {
        console.log(error);
    }
}

//Funcion crear cliente
export const crearCliente = async (peticion, respuesta) => {
    try {
        const clientes = peticion.body;

        if (Array.isArray(clientes)) {
            // Si es un arreglo, insertar todos los clientes
            await clienteModel.insertMany(clientes);
        } else if (typeof clientes === "object" && clientes !== null) {
            // Si es un objeto único, insertar un solo cliente
            await clienteModel.create(clientes);
        } else {
            return respuesta.status(400).json({ error: "La solicitud debe ser un objeto o una lista de clientes" });
        }

        // Consultar todos los clientes después de la inserción
        const todosLosClientes = await clienteModel.find();
        return respuesta.status(201).json({ clientes: todosLosClientes });
    } catch (error) {
        console.error(error);
        return respuesta.status(500).json({ error: "Error en el servidor" });
    }
};


//buscar cliente por nombre tercero
export const buscarClienteTercero = async (peticion,respuesta) => {
    try {
        const cliente = await clienteModel.findOne({ nombretercero: peticion.params.nombretercero });
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
        const cliente = await clienteModel.findOne({ ciudad: peticion.params.ciudad });
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
        const cliente = await clienteModel.findOne({ direccion: peticion.params.direccion });
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
        const cantidadClientes = await clienteModel.countDocuments();
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
        const clienteEncontrado = await clienteModel.findMany({telefono: { $regex: numero, $options: 'i' }});
        
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
            return respuesta.status(400).json({message:"Se necesitan rut y nombre de tercero"});
        }
        const nombreTerceroActualizado= await clienteModel.findByIdAndUpdate({rut},{nombretercero:nuevonombretercero},{new:true});

        if(!nombreTerceroActualizado){
            return respuesta.status(400).json({message:"cliente no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y direccion"});
        }
        const direccionActualizado= await clienteModel.findByIdAndUpdate({rut},{direccion:nuevadireccion},{new:true});

        if(!direccionActualizado){
            return respuesta.status(400).json({message:"cliente no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y telefono"});
        }
        const telefonoActualizado= await clienteModel.findByIdAndUpdate({rut},{telefono:nuevotelefono},{new:true});

        if(!telefonoActualizado){
            return respuesta.status(400).json({message:"cliente no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y ciudad"});
        }
        const ciudadActualizado= await clienteModel.findByIdAndUpdate({rut},{ciudad:nuevaciudad},{new:true});

        if(!ciudadActualizado){
            return respuesta.status(400).json({message:"cliente no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombreActualizado= await clienteModel.findByIdAndUpdate({rut},{nombre:nuevonombre},{new:true});

        if(!nombreActualizado){
            return respuesta.status(400).json({message:"cliente no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombreActualizado= await clienteModel.findByIdAndUpdate({rut},{nombreTercero:nuevonombre},{new:true});
        if(!nombreActualizado){
            return respuesta.status(400).json({message:"Usuario no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y direccion"});
        }
        const direccionActualizada= await clienteModel.findByIdAndUpdate({rut},{direccion:nuevadireccion},{new:true});

        if(!direccionActualizada){
            return respuesta.status(400).json({message:"Usuario no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y telefono"});
        }
        const telefonoActualizado= await clienteModel.findByIdAndUpdate({rut},{telefono:nuevotelefono},{new:true});

        if(!telefonoActualizado){
            return respuesta.status(400).json({message:"Usuario no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y ciudad"});
        }
        const ciudadActualizada= await clienteModel.findByIdAndUpdate({rut},{ciudad:nuevaciudad},{new:true});

        if(!ciudadActualizada){
            return respuesta.status(400).json({message:"Usuario no encontrado"});
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
            return respuesta.status(400).json({message:"Se necesitan rut y nombre"});
        }
        const nombrecActualizado= await clienteModel.findByIdAndUpdate({rut},{nombreContacto:nuevonombrec},{new:true});
        if(!nombrecActualizado){
            return respuesta.status(400).json({message:"Usuario no encontrado"});
        }
        respuesta.status(200).json({message:"Nombre de contacto actualizado"});
    
    } catch (error) {
        console.log(error);
    }
}