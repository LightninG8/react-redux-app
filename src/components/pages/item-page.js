import React, {Component} from 'react';

import {connect} from "react-redux";
import './item-page.css';
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class ItemPage extends Component {

    componentDidMount() {
        if (this.props.menuItems.length === 0) {
            const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

            menuRequested();
            
            RestoService.getMenuItems()
                .then(res =>  {
                    if (+this.props.match.params.id > res.length) {
                        menuError();
                    }
                    menuLoaded(res)
                })
                .catch(() => menuError());
        }   
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (error) {
            return <Error/>
        }

        const item = menuItems.find(el => +el.id === +this.props.match.params.id);
            

        if (loading) {
            return <Spinner/>
        }

        return <View item={item}/>
    }
};

const View = ({item}) => {
    const {title, url, category, price} = item;

    return (
        <div className="item_page">
            <div className="menu__item item_block">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span><span className = {`menu__category_Img ${category}`}></span> </div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </div>
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));