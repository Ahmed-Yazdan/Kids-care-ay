import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './PokemonCards.css';

const PokemonCards = (props) => {
    const { name, type, image, price, damage, level } = props.pokemon;

    return (
            <div className="col">
                <div className="card">
                <img src={image} className="card-img-top img-fluid" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Type: {type}</h6>
                    <h6>Damage: {damage}</h6>
                    <h6>Level: {level}</h6>
                    <p className="card-text">
                        Price: {price}
                    </p>
                    <button onClick={() => props.handleAddToCart(props.pokemon)} className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart}/>Purchase</button>
                </div>
                </div>
            </div>
    );
};

export default PokemonCards;