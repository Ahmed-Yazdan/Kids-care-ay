import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PokemonCards from '../PokemonCards/PokemonCards';

const Container = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => {
            setData(data);
        }
    )} ,[data]);
        
        const handleAddToCart = pokemon => {
            const newcart = [...cart,pokemon]
            setCart(newcart);
        }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto mt-4">
                {
                    data.map(pokemon => <PokemonCards pokemon={pokemon} key={pokemon.id} handleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div>
                <Cart cart={cart}/>
            </div>
        </>
    );
};

export default Container;





/* 
        
*/



