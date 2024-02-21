import { useContext } from "react";
import { FotosContext } from "../context/FotosContext";


const Gallery = () => {
  const {posts, setPosts} = useContext(FotosContext);
  
  return 
    <>
        hola a todos;
    </>
};
export default Gallery;
