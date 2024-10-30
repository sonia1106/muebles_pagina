import React from "react";
import '../css/gale_index.css'

function GaleriaIndex (){
    return(
        <body className="galeria">

        <section className="contenedor">
            <div className="cont_titu">
                    <h2 className="titulo1">Nuestra</h2>
                    <h2 className="titulo2">galeria</h2>
                </div>
            <div className="cont_gale">
                <div className=" gale">
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery3.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery4.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery5.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery1.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery2.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                    <div className="gale_item">
                        <img src={require(`../imagenes/gallery6.jpg`)}
                    alt="Portada" className='img_gale'/>
                    </div>
                </div>
            </div>
        </section>
        </body>
    )

}
export default GaleriaIndex;