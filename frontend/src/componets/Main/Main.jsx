
import correoImagen from "../../../images/correo.png";
import whatsapp from "../../../images/whatsapp-3.svg";
import vitafer from "../../../images/vitafer.png";
import iqos from "../../../images/iqoslogo.png";
import { useState } from "react";
import { useEffect } from "react";
//import { api } from "../../../utils/api";
import Card from "../Card/card";
import PreLoader from "../Preloader/preloader";


export default function Main() {
    const [loading, setLoading] = useState(true);
    const [cards,] = useState([{ image: "/images/minoxidil_unidad.png", name: "unidad frasco", price: "24.000", href: "https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee" }, { image: "/images/minoxidil_x3.png", name: "3 minoxidil", price: "79.000", href: "https://vife6306800.mercadoshops.com.ar/locion-barba-estimulante-x3/up/MLAU215496509?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA1124142429 " }, { image: "/images/minoxidil_caja.png", name: "caja minoxidil", price: "145.000", href: "https://vife6306800.mercadoshops.com.ar/locion-para-barba-x-6-caja/up/MLAU328981831?utm_source=mercadoshops&utm_medium=referral&utm_campaign=whatsapp_share" }]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);

        }, 2000);

    }, []);





    return (


        <main className="main">

            <h2 className="main__subtitle" id="about-us">Conoce Nuestros Productos</h2>
            <p className="main__explain">minoxidil kirkland para barba y cabello, puedes elegir entre 3 opciones.<br /> frasco unidad de 60ml <br /> 3 frasco  de 60 ml cada uno o <br />caja por 6 unidades de 60 ml. <br />
            </p>
            <div className="main__content">

                {loading ? (<PreLoader />) : cards.map(card => (
                    <Card
                        card={card}

                    />
                ))}
            </div>
            <div className="main__other-products">
                <div className="main__vitafer">
                    <img src={vitafer} alt="vitafer" className="main__vitafer-imagen" />
                    <button className="main__other-products-button">
                        <a target="_blank" href="https://vitafer.vercel.app/" className="main__other-products-button main__b">vitafer</a></button>

                </div>
                <div className="main__iqos-terea">
                    <img src={iqos} alt="iqos-terea" className="main__iqos-terea-imagen" />
                    <button className="main__other-products-button">
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5491123933206" className="main__other-products-button main__b" >iqos-terea</a></button>
                </div>
            </div>
            <div className="main__envios">
                <h2 className="main__envios-title">Envios a todo el pais</h2>
                <p className="main__envios-text">hacemos envios a todo el pais por medio de correo argentino.</p>
                <img src={correoImagen} alt="imagen de paqueteria de correo argentino" className="main__envios-imagen" />
            </div>
            <div className="main__use-explain">
                <h2 className="main__title-explain" id="modo-uso">Modo de uso</h2>
                <p className="main__text-explain">primer paso para usar Minoxidil es que tu pelo y o zona de la barba  debe estar limpio y bien seco. Debes aplicarlo en la zona a tratar, zona de cuero cabelludo o barba.

                    <p>
                        La dosis diaria recomendada es de 1 ml de la solución cada 12horas empezando por el centro de la zona a tratar. Se deberá respetar la dosis diaria recomendada independientemente de la extensión de la alopecia. La dosis máxima diaria recomendada es de 2 ml.
                    </p>
                    <p>
                        La sobredosis accidental o voluntaria tras la aplicación tópica de minoxidil5% producirá un aumento en la intensidad de efectos adversos de tipo dermatológicos, especialmente prurito (picor), sequedad, irritación cutánea y eccema.
                    </p>
                    Al finalizar la utilización de Minoxidil se recomienda el lavado de las manos con abundante agua para evitar el crecimiento de pelo en zonas no deseadas.
                    <p>
                        Los resultado se ven según la persona entre el 2do y el 3er mes de uso continuó.
                    </p>
                    <p>
                        Después de utilizar el frasco con el Minoxidil debes volver a taparlo y conservarlo en un lugar seco que no esté en contacto directo con la luz solar. No conservar a temperatura superior a 30ºC.</p>
                </p>
            </div>
            <div className="main__preguntas">
                <h2 className="main__title-explain" id="preguntas-frecuentes">Preguntas frecuentes</h2>
                <p className="main__text-explain">
                    <p>
                        -el producto es original?<br />
                        -si,es original. Es un producto importado. <br />
                    </p>
                    <p>
                        -hacen envios? <br />
                        - si, hacemos envios a todo el pais y entregas en CABA. <br />
                    </p>
                    <p>
                        - cuales son los medios de pago? <br />
                        - Se puede pagar en efectivo, transferencia, pago con tarjeta brde credito. <br />
                    </p>
                </p>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=5491123933206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-fixed">
                        <img src={whatsapp} alt="logo de whatsapp" />
                    </a>
                </div>
            </div>
        </main >
    );

}

