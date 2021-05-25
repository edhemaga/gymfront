export default (purchases=[], action) =>{
    switch(action.type){
        case 'FETCH_ALL_PURCHASES':
            return action.payload;
        case 'ADD_TO_BASKET':
            return [...purchases, action.payload];
        case 'CHECKOUT':
            return [];
        default:
            return purchases;
    }
}