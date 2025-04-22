import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
// import { useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUserContext";
import { useContext } from "react";
export default function Header(props) {
    const currentUser = useContext(CurrentUserContext);
    //const navigate = useNavigate();
    //const location = useLocation();
    return (
        <header className="header">

            <div className="header__container">

                <img src={logo} alt="logo" className="header__logo" />

                <div className="header__right">
                    <div className="redes">redes</div>
                    <div className="whatsapp">whatsapp</div>
                    {currentUser?.id ? (
                        <div>
                            <span className="header__mail">{props.email}</span>
                            <button className="header__button" onClick={props.handleSignout} >cerrar sesion</button>
                        </div>

                    ) : location.pathname === "/login" ? (
                        <link to="/register" className="header__button">Registrate</link>
                    ) : (
                        <Link to="/login" className="header__button">Iniciar Sesion</Link>
                    )}
                </div>
            </div>

        </header >
    );
}
