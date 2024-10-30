import React from "react";
import '../css/serv_index.css'

function ServiciosIndex(){
    return(
        <section className="sec_serv">
            <div className="servicios_cont">
                <div className="cont_titu">
                    <h2 className="titulo1">Nuestros</h2>
                    <h2 className="titulo2">servicios</h2>
                </div>
            </div>
            <div className="servicios">
                <div className="card_servicio">
                    <img src={require(`../imagenes/service1.png`)}
                    alt="Portada" className='img_ser'/>
                    <h2 className="titulo_ser"> Diseños atractivos</h2>
                    <p className="ser_serv">Diseños atractivos combinan estética y funcionalidad, usando colores armónicos, tipografía legible y una estructura clara.</p>

                </div>
                <div className="card_servicio">
                    <img src={require(`../imagenes/service2.png`)}
                    alt="Portada" className='img_ser'/>
                    <h2 className="titulo_ser"> Elementos creativos</h2>
                    <p className="ser_serv">Elementos creativos aportan originalidad y frescura al diseño, utilizando formas, colores y gráficos innovadores que capturan la atención y transmiten ideas de manera impactante.</p>

                </div>
                <div className="card_servicio">
                    <img src={require(`../imagenes/service3.png`)}
                    alt="Portada" className='img_ser'/>
                    <h2 className="titulo_ser"> Comodidad</h2>
                    <p className="ser_serv">Comodidad que invita al bienestar, integrando ergonomía y funcionalidad para una experiencia de uso agradable y adaptada a las necesidades diarias.</p>

                </div>
                <div className="card_servicio">
                    <img src={require(`../imagenes/service4.png`)}
                    alt="Portada" className='img_ser'/>
                    <h2 className="titulo_ser"> Diseños personalizados</h2>
                    <p className="ser_serv">Diseños únicos adaptados a cada estilo y necesidad, logrando espacios que reflejan personalidad y funcionalidad..</p>

                </div>
               

            </div>
        </section>
    )
}
export default ServiciosIndex;