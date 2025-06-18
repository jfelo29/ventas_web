import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUserContext";
import { useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
export default function Header(props) {
    console.log(props, "props");
    const currentUser = useContext(CurrentUserContext);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__left">
                    <img src={logo} alt="logo" className="header__logo" />
                    <p className="header__name">minoxidil <br /> kirkland <br /> barba</p>
                </Link>


                <button className="header__hamburguesa" onClick={() => setMenuVisible(!menuVisible)}>
                    ☰
                </button>

                <div className={`header__right ${menuVisible ? "show-menu" : ""}`}>
                    <a target="_blank" className="header__link" href="https://www.correoargentino.com.ar/formularios/ondnc">Seguimiento</a>
                    {currentUser?.token ? (
                        <div className="header__signin">
                            <span className="header__icon"><VscAccount /></span>
                            <button className="header__button" onClick={props.handleSignout}>Cerrar sesión</button>
                        </div>
                    ) : location.pathname === "/login" ? (
                        <Link to="/register" className="header__link">Registrate</Link>
                    ) : (
                        <Link to="/login" className="header__link">Iniciar sesión</Link>
                    )}
                </div>
            </div>
        </header>
    );
}
