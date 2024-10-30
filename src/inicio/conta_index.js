import React from "react";
import '../css/conta_index.css';

function Contactanos() {
    return (
        <section className="cont_form">
            <div className="titu_form">
                <h1 className="titulo">Contáctanos</h1>
            </div>
            <div className="input_form">
            <div className="sec_form">
                <form className="formu">
                    <div className="form">
                        <label className="lab_form">
                            <input type="text" placeholder="Nombre" required />
                        </label>
                    </div> 
                    <div className="form">
                        <label className="lab_form">
                            <input type="email" placeholder="correo electrónico" required />
                        </label>
                    </div>
                    <div className="form">
                        <label className="lab_form">
                            <input type="tel" placeholder="celular" required />
                        </label>
                    </div>
                    <div className="form">
                        <label className="lab_form">
                            <textarea placeholder="Escribe tu mensaje" required></textarea>
                        </label>
                    </div>
                    <div className="bot_form">
                        <button type="submit" className="btn_enviar">Enviar</button>
                    </div>
                </form>
            </div>
            <div className="mapa">
            <iframe className="ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.822837669532!2d-65.25589540861208!3d-19.039729368488082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc9001938469d%3A0x1428ab6a65ec1302!2sFabrica%20de%20muebles%20Jhoel!5e0!3m2!1sen!2sau!4v1730264896905!5m2!1sen!2sau" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>

        </section>
    );
}

export default Contactanos;
