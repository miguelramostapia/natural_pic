import  './App.css';
import MisfotosContainer from "./components/MisfotosContainer"
import Fotos from './components/Fotos.jsx';

/* import data from './photos.json'; */
import data from "./postres.json"
const paso = data;
console.log(paso[0].nombre);

const App = ()=>{
  return(
    <>
        <MisfotosContainer>
            {data.map(item=>
                      <Fotos 
                      name={item.nombre}  
                      desc = {item.img} 
                      url = "https://picsum.photos/200"/>
                )} 
        </MisfotosContainer>    
    </>
  )
}
export default App

/*
            <Fotos 
                      name="Miguel" 
                      desc = "cq cosa" />
            <Fotos 
                      name="Juan" 
                      desc = "cq cosa" />
            <Fotos 
                      name="Luis" 
                      desc = "cq cosa" />




import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const PHOTO_URL = "../public/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;
*/
