import { Route, Router, Routes } from "react-router-dom";
import "./assets/style/main.scss"
import Header from "./layout/header";
import Tv from "./pages/tv";
import Bosh_sahifa from "./pages/boshsahifa/index"
import Filmlar from "./pages/filmlar/index"
import Seriallar from "./pages/seriallar/index"
import Multfilmlar from "./pages/multfilmlar/index"
import Anime from "./pages/anime/index"
import Radio from "./pages/radio/index"
import Obunalar from "./pages/radio/index"
import Boshqalar from "./pages/boshqalar/index"
import MyForm from "./pages/form/form";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Bosh_sahifa/>} />
        <Route path="/tv" element={< Tv/>} />
        <Route path="/form" element={< MyForm/>} />
        <Route path="/filmlar" element={<Filmlar />} />
        <Route path="/seriallar" element={<Seriallar />} />
        <Route path="/multfilmlar" element={<Multfilmlar />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/obunalar" element={<Obunalar />} />
        <Route path="/boshqalar" element={<Boshqalar />} />
      </Routes>
    </>
  );
}

export default App;
