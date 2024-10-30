import React from "react";
import '../css/footer_index.css'
function Footer(){
return(
    <section className="cont_footer">
        <div className=" conte_img">
            <img src={require(`../imagenes/icono1.png`)}
               alt="Portada" className='img_footer'/>
               <p>
               Estamos aquí para ayudarte. Si tienes preguntas sobre nuestros productos o servicios, no dudes en ponerte en contacto con nosotros. Tu satisfacción es nuestra prioridad.
               </p>
        </div>
    </section>
)
}
export default Footer;