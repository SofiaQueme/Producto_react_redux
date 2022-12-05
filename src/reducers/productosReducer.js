import {AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_NOMBRE,
    LIMPIAR_STATE_AGREGAR_PRODUCTO,
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
    EDITAR_PRODUCTO_ERROR,
    EDITAR_PRODUCTO_EXITO
} from "../Types"





// cada reducer tiene su propio state 
const initialState={
    productos: [], 
    errorcargaproductos: false,
    error: false, 
    loading: false, 
    cargando:false,
    exito: false,
    id : '', 
    nombre: '',
    comentario: '', 
    precio: '', 
    productoeditar : null,
    erroreditar: false


}

export default function (state= initialState, action){

    switch (action.type){

        case AGREGAR_NOMBRE:
        return{
            ...state, 
            nombre: action.payload,
        }

        case AGREGAR_DESCRIPCION:
        return{
            ...state,
            comentario : action.payload,
        }

        case AGREGAR_PRECIO:
        return{
            ...state,
            precio: action.payload,
        }
        

        case AGREGAR_PRODUCTO: 
        return {
            ...state,  
            loading : true,
        }

        case AGREGAR_PRODUCTO_EXITO:
            
            return {
                ...state,  
              
                exito: action.payload
                
            }

        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,  
                error:action.payload,
            }
        
        
        
            case LIMPIAR_STATE_AGREGAR_PRODUCTO:
                return{
                    ...state,  
                    error: false, 
                    loading: false, 
                    cargando:false,
                    exito: false,
                    producto : {
                        id : '', 
                        nombre: '',
                        comentario: '', 
                        precio: ''
                    }
                }


            case OBTENER_PRODUCTOS_INICIO: 
            return  {
                ...state, 
                loading: action.payload
            }

            case OBTENER_PRODUCTOS_EXITO: 
            return {
                ...state, 
                loading: false,
                productos :  [...action.payload]
            }


            case OBTENER_PRODUCTOS_ERROR : 
            return {
                ...state, 
                errorcargaproductos: action.payload
            }

            case ELIMINAR_PRODUCTO: 
            case ELIMINAR_PRODUCTO_CANCELAR:
            return {
                ...state, 
                }

            case ELIMINAR_PRODUCTO_EXITO: 
            return {
            ...state, 
            productos :  state.productos.filter(item => item.id !==action.payload.id)
            }

            case  ELIMINAR_PRODUCTO_ERROR : 
            return {
                ...state ,  
                error:  true 
            }
            case EDITAR_PRODUCTO : 
            return {
                ...state, 
                productoeditar :  action.payload
            }

            case EDITAR_PRODUCTO_INICIO : 
            return {
                ...state, 
                productos:  state.productos.map(item => {
                    if (item.id === action.payload.id){
                        return action.payload
                    }
                })
            }
            case EDITAR_PRODUCTO_EXITO : 
            return {
                ...state, 
                productoeditar : null,
                erroreditar : false
            }

            case EDITAR_PRODUCTO_ERROR : 
            return {
                ...state, 
                productoeditar : null, 
                erroreditar :  action.payload
            }

        default:
             return state;

    }
    

}