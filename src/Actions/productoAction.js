import {AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_DESCRIPCION,
    AGREGAR_PRECIO,
   OBTENER_PRODUCTOS_INICIO,
   OBTENER_PRODUCTOS_EXITO, 
   OBTENER_PRODUCTOS_ERROR, 
   ELIMINAR_PRODUCTO, 
   ELIMINAR_PRODUCTO_EXITO,
   ELIMINAR_PRODUCTO_ERROR,
   ELIMINAR_PRODUCTO_CANCELAR,
   EDITAR_PRODUCTO, 
   EDITAR_PRODUCTO_INICIO, 
   EDITAR_PRODUCTO_EXITO, 
   EDITAR_PRODUCTO_ERROR, 
   EDITAR_PRODUCTO_CLEAN
} from "../Types";
 import clienteaxios from "../config/axios";
import Swal from 'sweetalert2' 
import { ErrorOutlineTwoTone } from "@mui/icons-material";


export function agregardescripcion (descripcion){
    return function (dispatch){ 
    dispatch(agregardescription(descripcion))
    }
}

export function agregarnombreaction (nombre){
    return function(dispatch){
        dispatch(agregarnombre(nombre))
    }
}

export function agregarprecio (precio){
    return function (dispatch){
        dispatch(agregarprecioaction(precio))
    }
}

export function obtenerproductosInicio (){
    return async function(dispatch){
        dispatch(obtenerproductosinicio())
        await clienteaxios.get("http://localhost:4000/posts")
        .then(respuesta=>{
                if(respuesta.data.length>0){
                    dispatch(obtenerproductosexito(respuesta.data))
                }
            }
            )
        .catch(error => {
           dispatch(obtenerproductoserror(true))
        })
    }

}

export function eliminarProductoAction (producto){
   
    return async  (dispatch)=>
    {
                    await clienteaxios.delete(`http://localhost:4000/posts/${producto.id}`)
                    .then(respuesta=>{
                        if (respuesta.status === 200)
                            dispatch(eliminarProductoConfirmacion(producto));
                        })
                    .catch(error => {
                        Swal.fire({
                            title: 'Error',
                            text: 'Hubo un error, por favor contacta al equipo de soporte técnico ',
                            icon: 'error',
                            confirmButtonText: 'Ok',
                        })
                    })
    }
}

export  function  crearNuevoProductoAction(producto){
      return async (dispatch)=>{ 
        try {
            await clienteaxios.post("http://localhost:4000/posts",producto)
            .then(respuesta=>{
                    dispatch(agregarProducto(producto));
                    dispatch(agregarproductoExito(true));
                       Swal.fire({
                                title: 'Exito',
                                text: 'Se agrego el item correctamente, exitos',
                               icon: 'success',
                                confirmButtonText: 'Ok'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  dispatch(limpiarStateAgregarItem());
                                } else if (result.isDenied) {
                                    dispatch(limpiarStateAgregarItem());
                                }})
                }
                )
            .catch(error => {
                dispatch(erroragregarProducto(true))
                Swal.fire({
                    title: 'Error',
                    text: 'Se encontro un error al agregar el item, por favor verifique  '+error+" ",
                   icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })
        }catch(error){
            dispatch(erroragregarProducto(true))
           
        }

    }
   
}


export function editarProductoInicio (row ) {
    return function  (dispatch){
        dispatch(editarProductinit(row))
    }
}
//probar funcionamiento de edicion 
export function editarProductoAction (producto){
    console.log(producto)
    let data  = JSON.stringify(producto)
    return async (dispatch)=>{
        try {
            await clienteaxios.post("http://localhost:4000/posts",data,{headers:{"Content-Type" : "application/json"}})
            .then(respuesta=>{ 
                dispatch(editarproductoInicio(producto))
               //dispatch(editarproductoExito())
                })
            }catch (error){
                 dispatch(errorEditarProducto(error))
            }
        
    }
}





export const agregarproductoExito=(value)=>
(dispatch)=>{
    dispatch({
        type: "AGREGAR_PRODUCTO_EXITO",
        payload: value
    })
};

export const agregarProducto = (producto)=>
(dispatch)=>{
    dispatch({
        type : "AGREGAR_PRODUCTO",
        payload:  producto

    })
};

export const erroragregarProducto=(estado)=>
(dispatch)=>{
    dispatch({
        type:"AGREGAR_PRODUCTO_ERROR",
        payload: estado
    })
};


export const limpiarStateAgregarItem=()=>
(dispatch)=>{
    dispatch({
        type:"LIMPIAR_STATE_AGREGAR_PRODUCTO"
        
    })
}



export const agregarnombre =(nombre)=>
(dispatch)=>{
    dispatch({
        type:"AGREGAR_NOMBRE",
        payload: nombre
        
    })
}

export const agregardescription =(descripcion)=>
(dispatch)=>{
    dispatch({
        type:"AGREGAR_DESCRIPCION",
        payload: descripcion
        
    })
}

export const agregarprecioaction =(precio)=>
(dispatch)=>{
    dispatch({
        type:"AGREGAR_PRECIO",
        payload: precio
        
    })
}


export const obtenerproductosinicio =()=>(
    dispatch =>{
        dispatch({
            type: "OBTENER_PRODUCTOS_INICIO",
            payload: true
        })

    }

)

export const obtenerproductosexito = (data)=>(
    dispatch => {
        dispatch({
            type:  "OBTENER_PRODUCTOS_EXITO", 
            payload: data
        })
    }
)

export const obtenerproductoserror =(estado)=>(
dispatch=>{
    dispatch({
        type: "OBTENER_PRODUCTOS_ERROR", 
        payload:  estado
    })
}

)




export const eliminarProductoConfirmacion=(producto)=>(
    dispatch =>{
        dispatch({
            type : "ELIMINAR_PRODUCTO_EXITO", 
            payload : producto
        })
    }
) 

export const editarProductinit =(row)=>(
    dispatch => {
        dispatch({
            type: "EDITAR_PRODUCTO",
            payload: row
        })
    }
)


export const editarproductoInicio =(producto)=>(
    dispatch=>{
        dispatch({
            type:  "EDITAR_PRODUCTO_INICIO", 
            payload: producto
        })
    }
)

export const errorEditarProducto = (error)=>(
    dispatch =>{
        dispatch({
            type: "EDITAR_PRODUCTO_ERROR",
            payload: error
        })
    }

)