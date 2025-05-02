//import unidad from "../../../images/minoxidil_unidad.png";
// import triple from "../../../images/minoxidil_x3.png";
// import caja from "../../../images/minoxidil_caja.png";
import correoImagen from "../../../images/correo.png";
import whatsapp from "../../../images/whatsapp-3.svg";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../../utils/api";
import Card from "../Card/card";

import Popup from "../../Popup/Popup";
export default function Main() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        api.getCards().then(data => { setCards(data); });
    }, []);

    https://api.mercadolibre.com/sites/MLA/search?seller_id=VIFE6306800



    return (

        <div className="main">

            <h2 className="main__subtitle" id="about-us">Conoce Nuestros Productos</h2>
            <p className="main__explain">minoxidil kirkland para barba y cabello, puedes elegir entre 3 opciones. frasco unidad de 60ml, 3 frasco  de 60 ml cada uno o caja por 6 unidades de 60 ml. <br /> La caja  </p>
            <div className="main__content">
                {/* Aca hay que mapear el estado de los productos */}

                {cards.map(card => (
                    <Card
                        card={card}

                    />
                ))}
                {/*<div className="card_portada">
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



                    </div>*/}


            </div>
            <div className="main__envios">
                <h2 className="main__envios__title">Envios a todo el pais</h2>
                <p className="main__envios__text">hacemos envios a todo el pais por medio de correo argentino.</p>
                <img src={correoImagen} alt="correo_argentino" className="main__envios__imagen" />
            </div>
            <div className="use__explain">
                <h2 className="title__main" id="modo-uso">Modo de uso</h2>
                <p className="text__main">primer paso para usar Minoxidil es que tu pelo y o zona de la barba  debe estar limpio y bien seco. Debes aplicarlo en la zona a tratar, zona de cuero cabelludo o barba.


                    La dosis diaria recomendada es de 1 ml de la solución cada 12horas empezando por el centro de la zona a tratar. Se deberá respetar la dosis diaria recomendada independientemente de la extensión de la alopecia. La dosis máxima diaria recomendada es de 2 ml.

                    La sobredosis accidental o voluntaria tras la aplicación tópica de minoxidil5% producirá un aumento en la intensidad de efectos adversos de tipo dermatológicos, especialmente prurito (picor), sequedad, irritación cutánea y eccema.

                    Al finalizar la utilización de Minoxidil se recomienda el lavado de las manos con abundante agua para evitar el crecimiento de pelo en zonas no deseadas.

                    Los resultado se ven según la persona entre el 2do y el 3er mes de uso continuó.

                    Después de utilizar el frasco con el Minoxidil debes volver a taparlo y conservarlo en un lugar seco que no esté en contacto directo con la luz solar. No conservar a temperatura superior a 30ºC.</p>
            </div>
            <div className="preguntas__frecuentes">
                <h2 className="title__main" id="preguntas-frecuentes">Preguntas frecuentes</h2>
                <p className="text__main">
                    -el producto es original?<br />
                    -si es original, es un producto importado. <br />
                    -hacen envios? <br />
                    - si, hacemos envios a todo el pais y entregas en CABA. <br />
                    - cuales son los medios de pago? <br />
                    - Se puede pagar en efectivo, transferencia, pago con tarjeta brde credito. <br />

                </p>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5491123933206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-fixed">
                        <img src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>
            </div>
        </div>
    );

}

