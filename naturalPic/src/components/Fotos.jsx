import './Fotos.css';
import { useContext,useState } from "react";
import { FotosContext } from "../context/FotosContext";
import {FaHeart} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';

import Favorites from '../views/Favorites';

const Fotos = (props)=>{
    const {posts, setPosts} = useContext(FotosContext)
    const {favorito, setFavorito} = useContext(FotosContext)


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


    return(
        <>
            <div onClick={()=>(HandleofClick(props.fotosId))} className="heart-container">
                {console.log("valor de liked")}{console.log(props.liked)}
                {props.liked == true? <FaHeart className="heart"/>:<FaRegHeart className="heart"/>}
            </div>
        </>

    )
}
export default Fotos

