import { useContext,useState } from "react";
import { FotosContext } from "../context/FotosContext";
import MisFotosContainer from '../components/MisfotosContainer'
import '../components/Fotos.css';
import './Home.css'
import {FaHeart} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';

import Fotos from '../components/Fotos'

const Home = () => {
  const {posts, setPosts} = useContext(FotosContext)
  const {favorito, setFavorito} = useContext(FotosContext)
  const [heart, setHeart]=useState(false)

  const HandleofClick=(valor)=>{ 
    console.log("valor de ")
    console.log(valor)
    const fotosArray = posts
    const unArray = fotosArray.forEach((element,i) => {
        if(element.id ==valor){
            console.log("valor cambiado")
            console.log(valor)
            element.liked=!element.liked;
        }
    });
    setFavorito(fotosArray)
}




  
  return (
    <>
      <MisFotosContainer>
          {posts.map(({ id, url, photographer, alt, liked}, i)=>(
                <>
                    <div className='fotos' style={{backgroundImage: `url("https://picsum.photos/200")` }}> 
                          <div className="fotos-container">
                            <div>
                                <div onClick={HandleofClick(id)} className="heart-container">
                                    {liked == true? <FaHeart className="heart"/>:<FaRegHeart className="heart"/>}
                                </div>
                                <div className="gap-container"></div>
                                {/* <img src="https://picsum.photos/200" alt='NO se puede ver'></img> */}
                                <h2 className="fotos_desc">{alt}</h2>
                                <h2 className="fotos_name">{photographer}</h2>
                            </div>

                          </div>
                    </div>
                </>     
          ))}
      </MisFotosContainer>
    </>
  );
};
export default Home;
/*


      {console.log("cuando llama")}{console.log({liked})}
      <Fotos
        fotosId = {id}
        fotoFavorita = {liked} 
      />

*/
