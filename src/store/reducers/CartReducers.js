const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {
    let findProduct;
    let index;
    let filter;
    switch (action.type) {
        case "ADD TO CART":
            const { product, quantity } = action.payload
            const Tprice = state.totalPrice + product.price * quantity;
            const Tquantities = state.totalQuantities + quantity;
            product.quantity = quantity;
            const check = state.products.find(prod => prod.id == product.id)
            if (check) {
                check.quantity += quantity
                return {
                    ...state, totalPrice: Tprice, totalQuantities: Tquantities
                }
            } else {
                return {
                    ...state, products: [...state.products, product], totalPrice: Tprice, totalQuantities: Tquantities
                }
            }
        case "INC":
            findProduct = state.products.find(prod => prod.id == action.payload);
            index = state.products.findIndex(prod => prod.id == action.payload);
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            return {
                ...state, totalPrice: state.totalPrice + findProduct.price, totalQuantities: state.totalQuantities + 1
            }

        case "DEC":
            findProduct = state.products.find(prod => prod.id == action.payload);
            index = state.products.findIndex(prod => prod.id == action.payload);
            filter = state.products.filter(prod => prod.id != action.payload);
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
                return {
                    ...state, totalPrice: state.totalPrice - findProduct.price, totalQuantities: state.totalQuantities - 1
                }
            }
            else {
                return {
                    ...state,
                    products: filter,
                    totalPrice: state.totalPrice - findProduct.price * findProduct.quantity, totalQuantities: state.totalQuantities - findProduct.quantity
                }
            }

        case "REMOVE":
            findProduct = state.products.find(prod => prod.id === action.payload);
            filter = state.products.filter(prod => prod.id != action.payload);
            return {
                ...state,
                products: filter,
                totalPrice: state.totalPrice - findProduct.price * findProduct.quantity, totalQuantities: state.totalQuantities - findProduct.quantity
            }

        default:
            return state;
    }


}

export default CartReducer;