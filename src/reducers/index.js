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
            
            const itemInd = state.cart.findIndex(item => item.id === id);

            if (itemInd >= 0) {
                const newItem = {
                    ...item,
                    count: state.cart[itemInd].count + 1,
                }
                
                
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, itemInd),
                        newItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + price,
                }
            }


            // Товара раньше не было в корзине
            const newItem = {
                ...item,
                count: 1,
            }
            return {
                ...state,
                cart: [
                    ...state.cart,
                    newItem
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