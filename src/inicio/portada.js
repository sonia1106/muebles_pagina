import React from 'react';
import '../css/portada.css';

function Portada() {
   return(
    <section className='sec_porta'>
        <div className='porta'>
            <img src={require(`../imagenes/portada.jpg`)}
               alt="Portada" className='img_portada'/>

        </div>
    </section>

   )
}

export default Portada;