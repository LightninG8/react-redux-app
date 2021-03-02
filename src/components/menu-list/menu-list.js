import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import './menu-list.scss';
import withRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError, addItemToCart} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {

    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

        menuRequested();
        
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(error => menuError());
    }

    render() {
        
        const {menuItems, loading, error, addItemToCart} = this.props;

        const menuList = menuItems.map(item => (
            <MenuListItem 
                key={item.id} 
                menuItem={item}
                onAddToCart={() => addItemToCart(item.id)}/>
        ));
            
        if (error) {
            return <Error/>
        }

        if (loading) {
            return <Spinner/>
        }

        return <View items={menuList}/>
    }
};
const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    ); 
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
    addItemToCart,
}
export default withRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));