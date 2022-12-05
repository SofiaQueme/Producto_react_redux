import React,{useEffect, useState } from "react";
import {useDispatch, useSelector} from  'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { editarProductoInicio,
} from "../Actions/productoAction";


import {obtenerproductosInicio, 
    eliminarProductoAction
} from "../Actions/productoAction"

const Productos =()=>{

    const dispatch = useDispatch();
    const generalstore  = useSelector(store=> store);

    useEffect (()=>{
        const obtenerproductos=()=>dispatch(obtenerproductosInicio())
        obtenerproductos(); 
    },[])


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    

    const handleChangeRowsPerPage = (value) => {
        setRowsPerPage(value.target.value);
        setPage(0);
      };

      const handleChangePage = (event, page) => {
        setPage(page);
      };

      const editarProducto = (row)=>{
         dispatch(editarProductoInicio(row))
      }
      const eliminarProducto = (row)=>{
        Swal.fire({
            title: 'Confirmación',
            text: 'Esta seguro que desea eliminar el item ',
            icon: 'warning',
            confirmButtonText: 'Ok',
            showCancelButton: 'Cancelar'
        }).then((result) =>
           {
                dispatch(eliminarProductoAction(row));
           });
      };

      

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#182A37",
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


    return(
    <Paper>
        {generalstore.productos.productos.length>0 ? 
        <Paper>
            <TableContainer component={Paper}>
                <div style={{ 'display': 'flex'
                                ,  'alignItems': 'center'
                                ,  'justifyContent': 'center'}}>

                            <h2 style={{"margin": "15px", "padding": "5px"}} >  Lista De Productos    </h2>
                </div>
                    <Table sx={{ minWidth: 'auto' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="right">Producto</StyledTableCell>
                                <StyledTableCell align="right">Descripción</StyledTableCell>
                                <StyledTableCell align="right">Precio</StyledTableCell>
                                <StyledTableCell align="right">Acción</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        
                            
                                <TableBody>
                                    {generalstore.productos.productos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow
                                            key={row.id}
                                        >
                                            <StyledTableCell align="left">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                                            <StyledTableCell align="right">{row.comentario}</StyledTableCell>
                                            <StyledTableCell align="right">{row.precio}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                   <>
                                                        {/* <Button component={Link}to={`/productos/editar/${row.id}`} variant="contained" color="success" size="small"  >
                                                            Editar
                                                            </Button> */}
                                                            {/*<Button  variant="contained" color="success" size="small" onClick={()=>{editarProducto(row)}} >*/}
                                                            <Button  component={Link} to={`/productos/editar/`} variant="contained" color="success" size="small" onClick={()=>{editarProducto(row)}} > EDITAR</Button>
                                                            {/* Editar
                                                            </Button> */}
                                                            <>&nbsp;</>
                                                        <Button variant="contained" color="warning" size="small" onClick={()=>{eliminarProducto(row)}}>Eliminar</Button>
                                                        
                                                 </>
                                            </StyledTableCell>
                                        </TableRow>
                                    )) }
                                </TableBody> 
                            
                        
                    </Table>
            </TableContainer>
                            <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            count={generalstore.productos.productos.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        /> 
        </Paper>
         :  "No existen elementos para mostrar"
         }
        
  </Paper>
)
}

export default Productos;