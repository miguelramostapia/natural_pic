import { createContext, useEffect, useState } from "react";

export const FotosContext = createContext();
import data from "./photos.json"

const FotosProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [favorito, setFavorito] = useState([])
  useEffect(() => {
    setPosts(data)
    setFavorito(data)
}, [])



  return (
    <>       
        <FotosContext.Provider value={{posts, setPosts, favorito, setFavorito}}>
            {children}
        </FotosContext.Provider> 
    </>
  );
};
export default FotosProvider;