import unidad from "../../../images/minoxidil_unidad.png";
import triple from "../../../images/minoxidil_x3.png";
import caja from "../../../images/minoxidil_caja.png";
import correoImagen from "../../../images/correo.png";
import Popup from "../../Popup/Popup";
export default function Main() {




    return (

        <div className="main">
            <h2 className="main__subtitle">Conoce Nuestros Productos</h2>
            <p className="main__explain">Nuestros productos son originales e importados. realmente aca quiero poner un texto aun mas largo que aun no tengo muy en claro. </p>
            <div className="main__content">
                <div className="card cardS__list">
                    <div className="card_portada">
                        <img src={unidad} alt="unidad_minoxidil" className="unidad_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product"
                                href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">unidad minoxidil</a>
                        </h3>
                        <div className="card__price" >
                            <span  >24.000
                            </span>

                        </div>



                    </div>
                </div>
                <div className="card cardS__list">
                    <div className="card_portada">
                        <img src={triple} alt="unidad_minoxidil" className="triple_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product" href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">3 minoxidil</a>
                        </h3>
                        <div className="card__price">
                            <span>79.000
                            </span>

                        </div>



                    </div>
                </div>
                <div className="card cardS__list">
                    <div className="card_portada">
                        <img src={caja} alt="caja_minoxidil" className="caja_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product" href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">caja minoxidil </a>
                        </h3>
                        <div className="card__price">
                            <span >145.000
                            </span>

                        </div>



                    </div>
                </div>

            </div>
            <div className="main__envios">
                <h2 className="main__envios__title">Envios a todo el pais</h2>
                <p className="main__envios__text">hacemos envios a todo el pais por medio de correo argentino.</p>
                <img src={correoImagen} alt="correo_argentino" className="main__envios__imagen" />
            </div>
        </div>

    );

}

