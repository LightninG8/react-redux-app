import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteItemFromCart} from "../../actions";
import withRestoService from "../hoc";

const CartTable = ({cart, deleteItemFromCart, RestoService}) => {
    const cartList = cart.map(item => {
        const {title, price, url, id, count} = item;

        const totalPriceToItem = count ? `${price}$ x ${count} = ${price * count}$` : `${price}`;
    
        return (
            <div className="cart__item" key={id}>
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{totalPriceToItem}</div>
                <div className="cart__close" onClick={() => deleteItemFromCart(id)}>&times;</div>
            </div>
        )
    });


    const cartNotation = cartList.length > 0 ? "" : (<div className="cart__notification">Ваша корзина пуста</div>);
    const setOrderButton = cartList.length > 0 ? (<button className="cart__set-order" onClick={() => {RestoService.setOrder(generateOrder(cart))}}>Оформить заказ</button>) : "";

    return (
        <div>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {cartNotation}
                {cartList}
            </div>
            {setOrderButton}
        </div>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            price: item.price, 
            count: item.count
        }
    })
    
    return newOrder;
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    deleteItemFromCart
}


export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));