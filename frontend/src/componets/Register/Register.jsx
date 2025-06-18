import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
    const { signup } = props;
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    };

    function handleSubmit(e) {
        console.log(data);

        e.preventDefault();
        signup({ email: data.email, password: data.password, name: data.name, number: data.number });
    };
    return (
        <div className="register">
            <p className="register__title"
                onClick={props.handleOpenPopup}>Registrate</p>
            <form className="register__form" id="form-register">
                <input type="text"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    className="register__input"
                    required
                    value={data.name}
                    onChange={(event) => handleChange(event)} />
                <span className="register__input-error"></span>
                <input type="number"
                    name="number"
                    placeholder="Numero de telefono"
                    id="number"
                    className="register__input"
                    required
                    value={data.number}
                    onChange={(event) => handleChange(event)} />
                <span className="register__input-error"></span>
                <input type="email"
                    name="email"
                    placeholder="Correo"
                    id="email"
                    className="register__input"
                    required
                    value={data.email}
                    onChange={(event) => handleChange(event)}
                />
                <span className="register__input-error"></span>

                <label htmlFor="pasword"></label>
                <input type="password"
                    name="password"
                    placeholder="Contraseña"
                    id="password"
                    className="register__input"
                    required
                    value={data.password}
                    onChange={(event) => handleChange(event)}
                />
                <span className="register__input-error"></span>

                <button className="register__button" onClick={(e) => handleSubmit(e)}>Registrate</button>
                <Link to="/login">
                    <p className="register__login">¿Ya tienes cuenta? Inicia sesión</p>
                </Link>
            </form>
        </div>
    );
}