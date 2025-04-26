import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
    const { signup } = props;
    const [data, setData] = useState("")

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    };

    function handleSubmit(e) {
        e.preventDefault();
        signup({ email: data.email, password: data.password });
    };
    return (
        <div className="register">
            <p className="register__title"
                onClick={props.handleOpenPopup}>Registrate</p>
            <form className="register__form" id="form-register">
                <input type="name"
                    placeholder="Nombre"
                    id="name"
                    className="imput__name"
                    required
                    value={data.name}
                    onchange={(event) => handleChange(event)} />
                <span className="register__input-error"></span>
                <input type="number"
                    name="number"
                    placeholder="Numero de telefono"
                    id="number"
                    className="imput__number"
                    required
                    value={data.number}
                    onchange={(event) => handleChange(event)} />
                <span className="register__input-error"></span>
                <input type="email"
                    name="email"
                    placeholder="Correo"
                    id="email"
                    className="imput__email"
                    required
                    value={data.email}
                    onchange={(event) => handleChange(event)}
                />
                <span className="register__input-error"></span>

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
                <span className="register__input-error"></span>

                <button type="submit" className="register__button" onClick={handleSubmit}>Registrate</button>
                <Link to="/login">
                    <p className="new__login">¿Ya tienes cuenta? Inicia sesión</p>
                </Link>
            </form>
        </div>
    );
}