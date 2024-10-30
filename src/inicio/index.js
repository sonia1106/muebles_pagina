import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/index.css';

function Cabecera() {
    const navigate = useNavigate();

    const acerClick = () => {
        navigate("/sec_acer"); // Cambia esto a la ruta que has definido
    };
    const servClick = () => {
        navigate("/servicios");
    };
    const galeClick = () => {
        navigate("/galeria");
    };
    const contClick = () => {
        navigate("/contactanos");
    };

    return (
        <header>
            <div>
                <img 
                    className="inc_bus"
                    src={require(`../imagenes/logo.png`)}
                    alt="Logo"
                />
            </div>
            <div className='lis_he'>
                <ul className='lis_nav'>
                    <li className='iten_nav'>
                        <a href="/" className="link_iten">Inicio</a>
                    </li>
                    <li className='iten_nav'>
                    <span className='link_iten' onClick={servClick} style={{ cursor: 'pointer' }}>
                            Servicios
                        </span>
                    </li>
                    <li className='iten_nav'>
                        <span className='link_iten' onClick={servClick} style={{ cursor: 'pointer' }}>
                            Servicios
                        </span>
                    </li>
                    <li className='iten_nav'>
                        <span className='link_iten' onClick={galeClick} style={{ cursor: 'pointer' }}>
                            Galería
                        </span>
                    </li>
                    <li className='iten_nav'>
                        <span className='link_iten' onClick={contClick} style={{ cursor: 'pointer' }}>
                            Contáctanos
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Cabecera;
