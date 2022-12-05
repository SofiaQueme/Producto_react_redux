import React from "react";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Header=()=>{
   return (
    <>
      <Box sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: '#04AA6D',
        '&:hover': {
          backgroundColor: '#04AA6D'
         // opacity: [0.9, 0.8, 0.7],
        },
      }}>
         <Grid container >
          <Grid xs={12}  >
               <h2 style={{"margin": "5px", "padding": "5px"}}> <Link to={"/"} className={"text-ligth"} style={{ textDecoration: 'none' }}>       React Redux Y Axios   </Link> </h2>
                  
            </Grid>
            <Grid xs={12}  >
               <Box   style={{"margin": "5px", "padding": "5px"}}>
                  <Button component={Link} to={"productos/nuevo"}  variant="contained" color="warning" size="small"> AGREGAR PRODUCTO</Button>
                   {/* //<Link to={"productos/nuevo"} style={{ textDecoration: 'none' }} className="btn btn-danger d-block d-md-inline-block"  >  AGREGAR PRODUCTO </Link>   */}
               </Box>
            </Grid> 
         </Grid> 
      </Box>
        
   </>
   

)
}


export default Header; 