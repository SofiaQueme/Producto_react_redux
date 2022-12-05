import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from  'react-redux';
import { crearNuevoProductoAction
         } from "../Actions/productoAction";
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom";


const NuevoProducto  = ()=>{

   const dispatch = useDispatch();
 
   const [nombre, setnombre] = useState(''); 
   const  [comentario, setcomentario]=useState('');
   const  [precio, setprecio]=useState('');

     const generalState = useSelector((state)=>state);

    useEffect(()=>{
        
                limparFormulario()
            
        },[generalState.productos.exito])

        let navigate = useNavigate();

 
    const  agregarNombreProducto=(value)=>{
        if (value.length>0){
            setnombre(value);
            
        }
    }

    const  agregarDescripcionProducto=(value)=>{
        if (value.length>0){
            setcomentario(value);
            
        }
        
    }

    const  agregarPrecioProducto=(value)=>{
        if (value>0){
            setprecio(value);
        }
    }
 
    const AgregarProducto =(e)=>{
        e.preventDefault();
        var id= uuid();
         dispatch(crearNuevoProductoAction({id,nombre, comentario, precio}) )
         navigate('/'); 
    }

function limparFormulario(){
    if (generalState.productos.exito){
     setnombre(''); 
     setcomentario('');
     setprecio('');
     
    }
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
                        onChange = {(e)=>agregarNombreProducto(e.target.value)}
                    />
                    
                    </FormControl> 
                    
                    < FormControl fullWidth>
                    <label className="form-control" style={{"margin":"5px","padding": "3px"}}>Descripción </label>  
                    <Input
                        id="DescripcionProducto"
                        type = "text"
                        value={comentario}
                        onChange= {(e)=>agregarDescripcionProducto(e.target.value)}
                    />
                    </FormControl>
                    <FormControl fullWidth>
                        <label className="form-control" style={{"margin":"5px","padding": "3px"}}>Precio </label>  
                        <Input
                            id="PrecioProducto"
                            type="number"
                            min="0"
                            value={precio}
                            onChange = {(e)=>Number(agregarPrecioProducto(e.target.value))}
                        />
                    </FormControl>

                    <Button type ={"submit"} variant="contained" color="success" style={{"margin":"20px","padding": "3px"}} 
                    onClick={AgregarProducto}
                    >
                    AGREGAR
                    </Button>
                   
              </FormControl>  
              
              
            </Box>   
          </Grid>
          
                 
        

              
    </Grid>  
)

}




export default NuevoProducto;