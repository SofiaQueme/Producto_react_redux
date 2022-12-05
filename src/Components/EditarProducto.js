import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {useEffect, useState } from "react";
import {useDispatch, useSelector} from  'react-redux';
import {editarProductoAction} from '../Actions/productoAction';

const EditarProducto = ()=>{
    
    const [precio, setprecio] = useState(0);
    const [comentario, setcomentario] = useState('');
    const [nombre, setnombre] = useState('');
    const [id, setid] =useState(0);
    const dispatch = useDispatch();
    const productoeditar  = useSelector(store=> store.productos.productoeditar);
    
    useEffect(()=>{
        setprecio(productoeditar.precio)
        setcomentario(productoeditar.comentario)
        setnombre(productoeditar.nombre)
        setid(productoeditar.id)
    },[productoeditar])

const  editarNombreProducto = (nombre)=>{
    if (nombre.length>0){
        setnombre(nombre)
    }
}

const  editarDescripcionProducto = (descripcion)=>{
    if (descripcion.length>0){
        setcomentario(descripcion)
    }
}

const  editarPrecioProducto = (precio)=>{
    if (precio.length>0){
        setprecio(precio)
    }
}

const editarProducto =(e)=>{
    e.preventDefault();
     dispatch(editarProductoAction({id,nombre, comentario, precio}) )
      
}

return (
    <Grid container>
          <Grid xs={12}>
          
            <Box        sx={{border: '1px solid'
                            , margin: '20px'
                            , padding:'20px'
                            , borderRadius:'10px'
                            , display: 'flex'
                            ,  alignItems: 'center'
                            ,  justifyContent: 'center' }}> 
                           
                
                           <FormControl fullWidth> 
                            <div style={{ 'display': 'flex'
                                    ,  'alignItems': 'center'
                                    ,  'justifyContent': 'center'}}>

                        <h2 style={{"margin": "5px", "padding": "5px"}} >  Agregar  Nuevo Producto    </h2>
                    </div>
                    <FormControl fullWidth> 
                    <label className="form-control" style={{"margin":"5px","padding": "3px"}}>Nombre Producto</label>  
                    <Input
                        id="nombre"
                        type = "text"
                        value={nombre}
                        onChange = {(e)=>editarNombreProducto(e.target.value)}
                    />
                    
                    </FormControl> 
                    
                    < FormControl fullWidth>
                    <label className="form-control" style={{"margin":"5px","padding": "3px"}}>Descripción </label>  
                    <Input
                        id="DescripcionProducto"
                        type = "text"
                        value={comentario}
                        onChange= {(e)=>editarDescripcionProducto(e.target.value)}
                    />
                    </FormControl>
                    <FormControl fullWidth>
                        <label className="form-control" style={{"margin":"5px","padding": "3px"}}>Precio </label>  
                        <Input
                            id="PrecioProducto"
                            type="number"
                            min="0"
                            value={precio}
                            onChange = {(e)=>Number(editarPrecioProducto(e.target.value))}
                        />
                    </FormControl>

                    <Button type ={"submit"} variant="contained" color="success" style={{"margin":"20px","padding": "3px"}} 
                    onClick={editarProducto}
                    >
                    AGREGAR
                    </Button>
                   
                 
                    
                </FormControl> 
            </Box>   
          </Grid>
          
              

        
    </Grid>  
)

}

export default EditarProducto;