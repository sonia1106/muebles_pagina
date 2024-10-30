import React from "react";
import '../css/sec_acer.css'

function AcercaIndex(){
return(
    <section className="cont_acer">
        <div className="cont">
            <div className="cont_titu">
                <h2 className="titulo1">Sobre </h2>
                <h2 className="titulo2">nosotros</h2>
            </div>
            <div className="cont_text">
                <p className="text">
                    En la frabrica de muebles, nos dedicamos a la fabricación y diseño de muebles de melamina de alta calidad. Nuestra pasión por la excelencia y la innovación nos impulsa a brindar lo mejor a nuestros clientes. Nuestro equipo está compuesto por expertos en diseño y fabricación de muebles, todos comprometidos a ofrecer el mejor servicio y apoyo a nuestros clientes. A lo largo de los años, hemos sido reconocidos con varios premios por nuestra calidad y diseño innovador.
                </p>
            </div>
        </div>
        <div className="seci_img">
             <div className="cont_img">
            
            <img src={require(`../imagenes/about.png`)}
            alt="Portada" className='img_acer'/>
            </div>
        </div>
       
    </section>
)
}
export default AcercaIndex;