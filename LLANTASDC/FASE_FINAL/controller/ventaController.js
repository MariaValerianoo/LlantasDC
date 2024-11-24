import { ventaModel } from "../model/ventaModel.js";

//Funcion obtener datos
export const obtenerVenta = async (peticion, respuesta) => {
    try {
        let venta = await userModel.find()
        respuesta.status(200).json("index", { venta })
    } catch (error) {
        console.log(error);
    }
}

//Funcion crear
export const crearVenta = async (peticion, respuesta) => {
    try {
        const venta = peticion.body;

        if (!Array.isArray(venta)) {
        return respuesta.status(400).render("error", { error: 'La solicitud debe ser una lista de ventas' });
        }
        await userModel.insertMany(venta);
        const todosLasVentas = await userModel.find();
        res.status(201).render("index", { ventas : todosLasVentas });

    } catch (error) {
        console.log(error);
    }
}

//buscar las ventas por metodo de pago 
export const buscarVentaPago = async(peticion,respuesta) => {
    try {
        const pago = await userModel.findOne({metodoPago: peticion.params.pago});
        if(pago){
            respuesta.status(200).json(pago);
        }
    } catch (error) {
        console.log(error);
    }
}

//buscar por rut 
export const buscarVentaRut = async(peticion,respuesta) => {
    try {
        const rut = await userModel.findOne({rutCliente: peticion.params.rut});
        if(rut){
            respuesta.status(200).json(rut);
        }
    } catch (error) {
        console.log(error);
    }
}

//buscar por usuario
export const buscarVentaUsuario = async(peticion,respuesta) => {
    try {
        const usuario = await userModel.findOne({idUsuario: peticion.params.usuario});
        if(usuario){
            respuesta.status(200).json(usuario);
        }
    } catch (error) {
        console.log(error);
    }
}

//ordenar total de compra DES
export const ventaTotalDES = async (peticion,respuesta) => {
    try {
        const ventas = await userModel.aggregate([
            {
                $sort: { totalCompra: -1 } 
            }
        ]);
        respuesta.status(200).json(contenedores);

    } catch (error) {
        console.log(error);
    }
}

//buscar entre fecha 
export const buscarVentaFecha =  async(peticion,respuesta)=>{
    try {
        const { fechaInicio, fechaFin } = peticion.query;
        if (!fechaInicio || !fechaFin) {
            return respuesta.status(400).json({message: "Debe proporcionar las fechas 'fechaInicio' y 'fechaFin'" });
        }
        const ventas= await userModel.findMany({fechaCompra: {$gte: new Date(fechaInicio),$lte: new Date(fechaFin)}});

        if (ventas.length > 0) {
            respuesta.status(200).json(ventas);
        }
    } catch (error) {
        console.log(error);
    }
}



//Buscar y mostras numero orden, fecha compra y total de la compra por rut
export const buscarVentasRutCliente = async (peticion, respuesta) => {
    try {
        const rutCliente  = peticion.params;
        if (!rutCliente) {
            return respuesta.status(400).json({ message: "Debe proporcionar un rut" });
        }
        const ventas = await ventaModel.find({ rutCliente: rutCliente }, { numOrden: 1, fechaCompra: 1, totalCompra: 1, _id: 0 });
        respuesta.status(200).json(ventas);

    } catch (error) {
        console.log(error);
    }
};

//MODIFICACIONES
//cambiar metodo de pago por numOrden 
export const metodoPagoNumOrden = async(peticion,respuesta)=>{
    try {
        const numOrden = peticion.params;
        const nuevopago= peticion.body;

        if(!numOrden || !nuevopago){
            return respuesta.satus(400).json({message:"Se necesitan numero de orden y metodo de pago"});
        }
        const numerOrdenActualizado= await userModel.findByIdAndUpdate({numOrden},{metodoPago:nuevopago},{new:true});

        if(!numerOrdenActualizado){
            return respuesta.satus(400).json({message:"Venta no encontrada"});
        }
        respuesta.status(200).json({message:"Metodo de pago actualizada"}); 
    } catch (error) {
        console.log(error);
    }
}

//cambiar fecha 
export const fechaNumOrden = async(peticion,respuesta)=>{
    try {
        const numOrden = peticion.params;
        const nuevafecha= peticion.body;

        if(!numOrden || !nuevafecha){
            return respuesta.satus(400).json({message:"Se necesitan fecha y metodo de pago"});
        }
        const fechaActualizada= await userModel.findByIdAndUpdate({numOrden},{fechaCompra:nuevafecha},{new:true});

        if(!fechaActualizada){
            return respuesta.satus(400).json({message:"venta no encontrada"});
        }
        respuesta.status(200).json({message:"Fecha actualizada"}); 
    } catch (error) {
        console.log(error);
    }
}


//actualizar total de compra 
export const actualizarTotalCompra = async (peticion, respuesta) => {
    try {
        const rutCliente  = peticion.params;
        if (!rutCliente) {
            return respuesta.status(400).json({ message: "Debe proporcionar un rut" });
        }
        const resultado = await ventaModel.updateMany({ rutClienteFK: rutCliente },{ $inc: { totalCompra: 500000 }});

        respuesta.status(200).json({message: "Se actualizó correctamente el totalCompra"});
    } catch (error) {
        console.log(error);
    }
};
