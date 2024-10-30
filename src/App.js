import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cabecera from './inicio/index';
import Portada from './inicio/portada';
import AcercaIndex from './inicio/sec_acer';
import ServiciosIndex from "./inicio/serv_index";
import GaleriaIndex from "./inicio/gale_index";
import Contactanos from "./inicio/conta_index";
import Footer from "./inicio/footer_index";

function App() {
    return (
        <Router>
            <Cabecera />
            <section>
               <Portada/>
            </section>
            <section>
               <AcercaIndex/>
            </section>
            <section>
               <ServiciosIndex/>
            </section>
            <section>
               <GaleriaIndex/>
            </section>
            <section>
               <Contactanos/>
            </section>
            <section>
               <Footer/>
            </section>
         </Router>
    );
    
}

export default App;
