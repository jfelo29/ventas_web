
export default function Card(props) {
    const { image, name, price, href } = props.card;

    return (<div className="card cardS__list">
        <div className="card_portada">
            <img src={image} alt="card" className="card__image" />
        </div>
        <div>

            <h3>
                <a className="name__product"
                    href={href}>{name}</a>
            </h3>
            <div className="card__price">
                <span>{price}
                </span>

            </div>



        </div>
    </div >
    )
}

{/*<div className="card_portada">
                        <img src={unidad} alt="unidad_minoxidil" className="unidad_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product"
                                href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">unidad minoxidil</a>
                        </h3>
                        <div className="card__price" >
                            <span  >24.000
                            </span>

                        </div>



                    </div>
                </div>
                <div className="card cardS__list">
                    <div className="card_portada">
                        <img src={triple} alt="unidad_minoxidil" className="triple_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product" href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">3 minoxidil</a>
                        </h3>
                        <div className="card__price">
                            <span>79.000
                            </span>

                        </div>



                    </div>
                </div>
                <div className="card cardS__list">
                    <div className="card_portada">
                        <img src={caja} alt="caja_minoxidil" className="caja_minoxidil" />
                    </div>
                    <div>

                        <h3 >
                            <a className="name__product" href="https://vife6306800.mercadoshops.com.ar/locion-barba-aceite-estimulante/up/MLAU303285170?pdp_filters=category%3AMLA417772%7Cseller_id%3A152685387%7Citem_id%3AMLA903193820#position=1&search_layout=stack&type=item&tracking_id=333e0122-9c8b-4e2a-8634-34b90e2db8ee">caja minoxidil </a>
                        </h3>
                        <div className="card__price">
                            <span >145.000
                            </span>

                        </div>



                    </div>*/}