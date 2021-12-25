import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
            <div className="header mx-auto border rounded-3">
                <img src={logo} alt="" />
                <h1 className="m-3">Welcome to Pokemon World !</h1>
                <h3 className="m-3">Get your best cards to fight other Pokemon Trainers!</h3>
                <h1 className="m-3">Total Balance: $100000</h1>
            </div>
    );
};

export default Header;