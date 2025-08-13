import logo from "../../../images/logo.png";
export default function Footer() {
    return (

        <div className="footer__content">
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
                <a className="footer__mail" >
                    <p>correo: </p>
                </a>

                <div className="footer__whatsapp">
                    <p >whatsapp 1123933206</p>
                </div>

                <div >
                    <p>instagram: minoxidil.kirkland.barba</p>


                </div>
            </div>

        </div >
    );
}
