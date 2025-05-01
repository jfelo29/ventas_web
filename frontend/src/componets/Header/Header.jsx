import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/currentUserContext";
import { useContext } from "react";
import Popup from "../../Popup/Popup";
export default function Header(props) {
    const currentUser = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className="header">

            <div className="header__container">

                <Link to="/" className="header__left" >  <img src={logo} alt="logo" className="header__logo" />
                    <p className="header__name">minoxidil <br /> kirkland <br />barba</p></Link>

                <div className="header__right">
                    <div className="header__button">otros productos</div>
                    <a target="_blank" className="header__button" href="https://www.correoargentino.com.ar/seguimiento-de-envios">seguimiento</a>
                    {currentUser?.id ? (
                        <div>
                            <span className="header__mail">{props.email}</span>
                            <button className="header__button" onClick={props.handleSignout} >cerrar sesion</button>
                        </div>

                    ) : location.pathname === "/login" ? (
                        <Link to="/register" className="header__button">Registrate</Link>
                    ) : (
                        <Link to="/login" className="header__button">Iniciar Sesion</Link>
                    )}
                </div>
            </div>
            {
                props.popup && (
                    <Popup onClose={props.handleClosePopup} title={props.popup.title}>
                        {props.popup.children}
                    </Popup>
                )
            }
        </header >
    );
}
