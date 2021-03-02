const initialState = {
    menu: [],
    loading: true,
    error: false,
    cart: [],
    totalPrice: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false,
            }

        case "MENU_REQUESTED":
            return {
                ...state,
                loading: true,
                error: false
            }

        case "MENU_ERROR":
            return {
                ...state,
                loading: false,
                error: true,
            }

        case "ADD_ITEM_TO_CART":
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const price = item.price;

            return {
                ...state,
                cart: [
                    ...state.cart,
                    item
                ],
                totalPrice: state.totalPrice + price,
            }

        case "DELETE_ITEM_FROM_CART":
            const idx = action.payload;
            const itemIndex = state.cart.findIndex  (item => item.id === idx);

            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, itemIndex),
                    ...state.cart.slice(itemIndex + 1)
                ],
            }

        default:
            return state;
    }
}


export default reducer;