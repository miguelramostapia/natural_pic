import archivoPhotos from './photos.json'

console.log(archivoPhotos)
const fotos = archivoPhotos.photos
const Home = () =>{

  return(
    <>
      <div>
          <h1>nada {fotos.map(item=>
                    <h5>
                      {item.id} <br/>
                      {item.url} <br/>
                    </h5>
          )}</h1>
      </div>
    </>
  )
}
export default Home;

/* 
import { useEffect, useState } from "react";

function listarfotos(){
  const [photos, setphotos] = useState([])
  useEffect(()=>{
    fetch('photos.json')
    .then(response => response.json())
    .then(datos=>{
        setphotos(datos)
    })
  },[])
  return photos
}
export default function fotos(){
  const photos = listarfotos();
  return(
    <>
      <div>
        {photos.map(item=>(
          <p>{item.page}</p>
        ))}
      </div>
    </>
  )
}


import Gallery from "../components/Gallery";
import basedato from "../photos.json"

const Home = () => {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
          basedato.map(datoP => )
      <Gallery />
    </div>
  );
};
export default Home;

*/
