import './App.css';
import Header from "./Components/Header";
import Productos from "./Components/Productos";
import NuevoProducto  from './Components/NuevoProducto';
import EditarProducto  from './Components/EditarProducto';


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//Redux 
import {Provider}  from 'react-redux';
import store from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
          <Header />
          <div className="container"> 
            <Routes> 
                <Route exact path="/" element={<Productos/>}/>
                <Route exact path="/productos/nuevo" element={<NuevoProducto/>}/>
                <Route exact path="/productos/editar" element={<EditarProducto/>}/>
              
            </Routes>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
