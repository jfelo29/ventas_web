
export default function Card(props) {
    const { image, name, price, href } = props.card;

    return (<div className="card cardS__list">
        <a target="_blank" className="name__product"
            href={href}>
            <div className="card_portada">
                <img src={image} alt="card" className="card__image" />
            </div>
            <div>

                <h3>
                    {name}
                </h3>
                <div className="card__price">
                    <span>{price}
                    </span>
                </div>



            </div>
        </a>
    </div >
    )
}

