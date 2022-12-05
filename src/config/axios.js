import axios from "axios"; 

const clienteaxios = axios.create({
  baseUrl:'http://localhost:4000/',
  timeout: 2000

});

export default clienteaxios;  
