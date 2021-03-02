const menuLoaded = (newMenu) => ({
    type: "MENU_LOADED",
    payload: newMenu
});
const menuRequested = () => ({
    type: "MENU_REQUESTED",
});
const menuError = () => ({
    type: "MENU_ERROR",
});
const addItemToCart = (id) => ({
    type: "ADD_ITEM_TO_CART",
    payload: id
});
const deleteItemFromCart = (id) => ({
    type: "DELETE_ITEM_FROM_CART",
    payload: id
});

export {
    menuLoaded,
    menuRequested,
    menuError,
    addItemToCart,
    deleteItemFromCart
}