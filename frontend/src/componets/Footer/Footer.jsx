import logo from "../../../images/logo.png";
import instagram from "../../../images/instagram.png";
import whatsapp1 from "../../../images/whatsappfooter.png";
export default function Footer() {
    return (

        < footer className="footer__content">
            <div className="footer__logo">
                <img src={logo} alt="logo de minoxidil barba kirkland" className="footer__logo-image" />
                <p className="footer__copyright">
                    &copy; 2025. Felipe Vivas
                </p>
            </div>
            <div className="footer__about-us" >
                <a className="footer__nuetro-productos" href="#about-us"> sobre nosotros</a>
                <a className="footer__modo-uso" href="#modo-uso">
                    <p>modo de uso</p>
                </a>
                <div className="footer__asks">
                    <p>preguntas frecuentes</p>
                </div>
            </div>
            <div className="footer__contact" >contacto

                <div className="footer__whatsapp">
                    <p>
                        <img src={whatsapp1} alt="whatsapp1" className="whatsapp__footer" />
                    </p>
                    <p className="footer__text">+5491123933206</p>

                </div>
                <div className="footer__instagram">
                    <p>
                        <img src="/images/instagram.png" alt="instagram" className="intagram__logo" />
                    </p>
                    <p className="footer__text">@minoxidil.kirkland.barba</p>

                </div>
            </div>
        </footer >
    );
}
