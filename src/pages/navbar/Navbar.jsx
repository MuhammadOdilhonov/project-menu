import React from 'react';

const MenuButton = ({ imgSrc, imgAlt, label }) => (
    <button className="menu-button">
        <img aria-hidden="true" alt={imgAlt} src={imgSrc} className="menu-button-img" />
        <span className="menu-button-label">{label}</span>
    </button>
);

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img
                aria-hidden="true"
                alt="table"
                src="https://openui.fly.dev/openui/50x50.svg?text=🪑"
                className="navbar-icon"
            />
            <span className="table-number">1</span>
           <div >
                <MenuButton
                    imgSrc="https://openui.fly.dev/openui/20x20.svg?text=🍜"
                    imgAlt="food"
                    label="Taomlar"
                />
                <MenuButton
                    imgSrc="https://openui.fly.dev/openui/20x20.svg?text=☕"
                    imgAlt="drinks"
                    label="Ichimliklar"
                />
                <MenuButton
                    imgSrc="https://openui.fly.dev/openui/20x20.svg?text=🥗"
                    imgAlt="salad"
                    label="Salatlar"
                />
           </div>
        </div>
    );
};

export default Navbar;
