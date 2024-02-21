import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import FotosProvider from "./context/FotosContext";

const App = () => {
  return (
    <>
      <FotosProvider>
        <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/favoritos" element={<Favorites />}/>
            </Routes>
        </div>
      </FotosProvider>
    </>
  );
};
export default App;

