import React from 'react';
import ShowItemName from '../ShowItemName/ShowItemName';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for(const pokemon of cart){
        total = total + pokemon.price;
    }
    return (
        <div className="bg-warning w-75 mx-auto mt-4 border rounded">
            <div>
                <h1>Order Summary</h1>
                <h1>Total cards Ordered: {cart.length}</h1>
                <h1>Total Cost: {total}</h1>
            </div>
            <div>
                <h1 className="mt-4">Ordered Cards List:</h1>
                {
                    props.cart.map(pokemon => <ShowItemName name={pokemon.name}></ShowItemName>)
                }
            </div>
        </div>
    );
};

export default Cart;