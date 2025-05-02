export default function Card(props) {
    const { imagen, nombre, precio } = props.card;
    console.log(props);
    return (<div className="card cardS__list">
        <div className="card_portada">
            <img src={imagen} alt="card" className="card__image" />
        </div><div>

            <h3>
                <a className="name__product"
                    href="">{nombre}</a>
            </h3>
            <div className="card__price">
                <span>{precio}
                </span>

            </div>



        </div>
    </div >
    )
}

