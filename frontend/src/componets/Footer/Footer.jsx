import logo from "../../../images/logo.png";
export default function Footer() {
    return (

        <div className="footer__content">
            <div className="footer__logo">
                <img src={logo} alt="logo" className="footer__logo" />
            </div>
            <div className="about__us" >
                <a className="about__us" href="#about-us"> sobre nosotros</a>
                <div className="modo__uso">
                    <p>modo de uso</p>
                </div>
                <div className="asks">
                    <p>preguntas frecuentes</p>
                </div>
            </div>
            <div className="footer__contact" >contacto
                <div className="footer__mail">
                    <p>correo: barba@barba.com</p>
                </div>

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
