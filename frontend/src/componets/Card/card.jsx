export default function Card(props) {
    const { image, name, price } = props.card;
    console.log(props.card);
    return (<div className="card cardS__list">
        <div className="card_portada">
            <img src={image} alt="card" className="card__image" />
        </div><div>

            <h3>
                <a className="name__product"
                    href="">{name}</a>
            </h3>
            <div className="card__price">
                <span>{price}
                </span>

            </div>



        </div>
    </div >
    )
}

