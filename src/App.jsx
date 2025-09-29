import './App.css'

import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Favourite from "./pages/Favourite/Favourite.jsx";
import Visited from "./pages/Visited/Visited.jsx";
import CountryDetails from "./pages/CountryDetails/CountryDetails.jsx";
import Postcard from "./pages/Postcard/Postcard.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/visited" element={<Visited />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/postcard" element={<Postcard />} />
      </Routes>
    </>
  )
}

export default App
