
const initState = {
    products: [
        {
            id: 1,
            title: "mens tshirt",
            price: 200,
            imgUrl:
                "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            id: 2,
            title: "womens tshirt",
            price: 220,
            imgUrl:
                "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
            id: 3,
            title: "shoes",
            price: 800,
            imgUrl:
                "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        { id: 4, title: "tops", price: 100, imgUrl: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        { id: 5, title: "bottoms", price: 120, imgUrl: 'https://images.pexels.com/photos/1261373/pexels-photo-1261373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        { id: 6, title: "socks", price: 150, imgUrl: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        { id: 7, title: "belts", price: 220, imgUrl: 'https://images.pexels.com/photos/1023937/pexels-photo-1023937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
        { id: 8, title: "caps", price: 100, imgUrl: 'https://images.pexels.com/photos/2084702/pexels-photo-2084702.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
    ],
    product: {}
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id == action.id) }
        default:
            return state;
    }
}

export default ProductsReducer;