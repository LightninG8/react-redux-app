import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, id} = menuItem;

    return (
        <li className="menu__item">
            <Link className="menu__link" to={`/${id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span><span className = {`menu__category_Img ${category}`}></span> </div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn" onClick={(e) => {
                    e.preventDefault();
                    onAddToCart();
                }}>Add to cart</button>
            </Link>
        </li>
    )
}

export default MenuListItem;