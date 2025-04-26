import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
    const { signin } = props;
    const [data, setData] = useState("")


    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    };

    function handleSubmit(e) {
        e.preventDefault();
        signin({ email: data.email, password: data.password });
    };
    return (
        <div className="login">
            <p className="login__title"
                onClick={props.handleOpenPopup}>Iniciar Sesión</p>
            <form className="login__form" id="form-login">
                <input type="email"
                    name="email"
                    placeholder="Correo"
                    id="email"
                    className="imput__email"
                    required
                    value={data.email}
                    onchange={(event) => handleChange(event)}
                />
                <span className="login__input-error "></span>

                <label htmlFor="pasword"></label>
                <input type="password"
                    name="password"
                    placeholder="Contraseña"
                    id="password"
                    className="imput__password"
                    required
                    value={data.password}
                    onchange={(event) => handleChange(event)}
                />
                <span className="login__input-error"></span>

                <button type="submit" className="login__button" onClick={handleSubmit}>Iniciar Sesión</button>
                <Link to="/register" >
                    <p className="new__register">¿No tienes cuenta? Regístrate</p>
                </Link>

            </form>
        </div>
    );
}






