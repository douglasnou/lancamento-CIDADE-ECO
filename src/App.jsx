import { Banner } from "./Banner/banner";
import { Lugar } from "./Lugar/Lugar";
import { Sobre } from "./Sobre/sobre";
import "./style/index.scss";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Lote } from "./Lote/Lote";
import { Cidade } from "./Cidade/Cidade";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em ms
      once: false,
      offset: 100,    // Se 'false', anima toda vez que subir/descer
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <>
      <Banner />
      <Sobre />
      <Cidade />
      <Lugar />
      <Lote />
    </>
  )
}

export default App
