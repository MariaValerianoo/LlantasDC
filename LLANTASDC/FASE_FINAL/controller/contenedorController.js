import { contenedorModel } from "../model/contenedorModel.js";

//Funcion obtener datos
export const obtenerContenedor = async (peticion, respuesta) => {
    try {
        let contenedor = await contenedorModel.find()
        respuesta.status(200).json("index", { contenedor })
    } catch (error) {
        console.log(error);
    }
}

//Funcion crear contenedor

export const crearContenedor = async (req, res) => {
    try {
        const nuevoContenedor = new contenedorModel(req.body);
        const contenedorGuardado = await nuevoContenedor.save();
        res.status(201).json(contenedorGuardado); // 201 para "creado"
    } catch (error) {
        console.error("Error al crear el contenedor:", error);
        res.status(500).json({ message: "Error al crear el contenedor" });
    }
};


//buscar contendor por naviera 
export const buscarContenedorNaviera = async (peticion,respuesta) => {
    try {
        const contenedor = await contenedorModel.findOne({ naviera: peticion.params.naviera });
        if (contenedor) {
          respuesta.status(200).json(contenedor);
        } else {
          respuesta.status(404).json({ message: "No se pudo encontrar el contenedor" });
        }
    } catch (error) {
        console.log(error);
    }
}

//buscar contenedor por idContenedor >=
export const buscarIdMayor = async(peticion,respuesta)=>{
    try {
        const numero= peticion.params;
        if(!numero){
            return resultado.status(404).json({message:"Se necesita un número"});
        }
        const facturas = await contenedorModel.find({ idContenedor: { $gte: numero} }, { FacturaContenedor: 1 });

        if (!facturas || facturas.length === 0) {
            return respuesta.status(404).json({ message: `No se encontraron facturas de contenedores con idContenedor >= ${numero}` });
        }
        respuesta.status(200).json({ facturas, numeroFiltro: numero});
    } catch (error) {
        console.log(error)
    }
}

//buscar contenedor entre fechas de llegada 
export const buscarContenedorFecha =  async(peticion,respuesta)=>{
    try {
        const { fechaInicio, fechaFin } = peticion.query;
        if (!fechaInicio || !fechaFin) {
            return respuesta.status(400).json({message: "Debe proporcionar las fechas 'fechaInicio' y 'fechaFin' en la consulta." });
        }

        const contenedores = await contenedorModel.findMany({
            fechaLlegada: {$gte: new Date(fechaInicio),$lte: new Date(fechaFin)}
        });

        if (contenedores.length > 0) {
            respuesta.status(200).json(contenedores);
        }
    } catch (error) {
        console.log(error);
    }
}

//cuantos contenedor hay
export const contarContenedor = async(peticion,respuesta) => {
    try {
        const cantidadContenedores = await contenedorModel.countDocuments();
        if(cantidadContenedores){
            respuesta.status(200).json(cantidadContenedores);
        }
    } catch (error) {
        console.log(error);
    }
}

//Buscar contenedor por facturacontenedor con numero (like)
export const buscarContenedorLikeFactura = async(peticion,respuesta) => {
    try {
        const numero = peticion.params;
        const contenedorEncontrado = await contenedorModel.findMany({facturacontenedor: { $regex: numero, $options: 'i' }});
        
        if(contenedorEncontrado){
            respuesta.status(200).json(contenedorEncontrado);
        }
    } catch (error) {
        console.log(error);
    }
}

//Ordenar fechallegada de forma DES
export const contenedorFechaLlegadaDES = async (peticion,respuesta) => {
    try {
        const contenedores = await contenedorModel.aggregate([
            {
                $sort: { fechaLlegada: -1 } 
            }
        ]);
        if (contenedores.length === 0) {
            respuesta.status(404).json({ message: "No se encontraron contenedores." });
        } else {
            respuesta.status(200).json(contenedores);
        }
    } catch (error) {
        console.log(error);
    }
}


export const buscarFechaFactura = async (peticion, respuesta) => {
    try {
        const { numero } = peticion.params; 
        if (!numero) {
            return respuesta.status(400).json({ message: "Debe proporcionar un número" });
        }
        const contenedores = await contenedorModel.find(
            { facturaContenedor: { $regex: numero, $options: "i" } }, 
            { fechaLlegada: 1, _id: 0 } 
        );
        respuesta.status(200).json(contenedores);

    } catch (error) {
        console.log(error);
    }
}

//MODIFICACIONES 
//camabiar naviera 
export const navieraId = async(peticion,respuesta)=>{
    try {
        const idContenedor = peticion.params;
        const nuevanaviera= peticion.body;

        if(!idContenedor || !nuevanaviera){
            return respuesta.satus(400).json({message:"Se necesitan id contenedor y naviera"});
        }
        const navieraActualizada= await contenedorModel.findByIdAndUpdate({idContenedor},{naviera:nuevanaviera},{new:true});

        if(!navieraActualizada){
            return respuesta.satus(400).json({message:"Contenedor no encontrado"});
        }
        respuesta.status(200).json({message:"Naviera actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar faechaLlegada 
export const fechaLlegadaId = async(peticion,respuesta)=>{
    try {
        const idContenedor = peticion.params;
        const nuevafecha= peticion.body;

        if(!idContenedor || !nuevafecha){
            return respuesta.satus(400).json({message:"Se necesitan id contenedor y fecha"});
        }
        const fechaActualizada= await contenedorModel.findByIdAndUpdate({idContenedor},{fechaLlegada:nuevafecha},{new:true});

        if(!fechaActualizada){
            return respuesta.satus(400).json({message:"Contenedor no encontrado"});
        }
        respuesta.status(200).json({message:"Fecha actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}

//cambiar agente aduanera 
export const agenteAduaneraId = async(peticion,respuesta)=>{
    try {
        const idContenedor = peticion.params;
        const nuevaagente= peticion.body;

        if(!idContenedor || !nuevaagente){
            return respuesta.satus(400).json({message:"Se necesitan id contenedor y agente aduanera"});
        }
        const agenteActualizada= await contenedorModel.findByIdAndUpdate({idContenedor},{agenteAduanera:nuevaagente},{new:true});

        if(!agenteActualizada){
            return respuesta.satus(400).json({message:"Contenedor no encontrado"});
        }
        respuesta.status(200).json({message:"Agente aduanera actualizada"});
    
    } catch (error) {
        console.log(error);
    }
}
