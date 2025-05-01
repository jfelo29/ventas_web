import logo from "../../../images/logo.png";
export default function Footer() {
    return (

        <div className="footer__content">
            <div className="footer__logo">
                <img src={logo} alt="logo" className="footer__logo" />
                <p className="footer__copyright">
                    &copy; 2025. Felipe Vivas
                </p>
            </div>
            <div className="about__us" >
                <a className="nuetro__productos" href="#about-us"> sobre nosotros</a>
                <a className="modo__uso" href="#modo-uso">
                    <p>modo de uso</p>
                </a>
                <div className="asks">
                    <p>preguntas frecuentes</p>
                </div>
            </div>
            <div className="footer__contact" >contacto
                <a className="footer__mail" >
                    <p>correo: barba@barba.com</p>
                </a>

                <div className="footer__whatsapp">
                    <p >whatsapp 1123933206</p>
                </div>

                <div >
                    <p>instagram: @barba</p>


                </div>
            </div>

        </div >
    );
}
