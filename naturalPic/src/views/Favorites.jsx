import { useContext,useState } from "react";
import { FotosContext } from "../context/FotosContext";
import MisFotosContainer from '../components/MisfotosContainer'
import '../components/Fotos.css';
import './Home.css'
import {FaHeart} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';

const Favorites = () => {
    const {favorito, setFavorito} = useContext(FotosContext)

    return (
      <>
        <MisFotosContainer>
            {favorito.map(({ id, url, photographer, alt, liked}, i)=>(
                  <>
                  {liked == true?
                      <div className='fotos' style={{backgroundImage: `url("https://picsum.photos/200")` }}> 
                            <div className="fotos-container">
                              <div>
                                  <div className="heart-container">
                                      {liked == true? <FaHeart className="heart"/>:<FaRegHeart className="heart"/>}
                                  </div>
                                  <div className="gap-container"></div>
                                  {/* <img src="https://picsum.photos/200" alt='NO se puede ver'></img> */}
                                  <h2 className="fotos_desc">{alt}</h2>
                                  <h2 className="fotos_name">{photographer}</h2>
                              </div>
  
                            </div>
                      </div>:<div></div>}
                  </>     
            ))}
        </MisFotosContainer>
      </>
    );
};
export default Favorites;
