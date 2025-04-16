import logo from "../../../images/logo.png";
export default function Header() {
    return (
        <header className="header">
            <div className="header__container">

                <img src={logo} alt="logo" className="header__logo" />

                <div className="header__right">
                    <span className="header__mail">correo@correo.com</span>
                    <button className="header__button" >cerrar sesion</button>
                </div>

            </div>
        </header>
    );
}