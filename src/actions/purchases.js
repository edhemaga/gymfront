import * as api from '../api/index';

export const addToBasket = (item) => async(dispatch)=>{
    try{
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    }catch(error){
        console.log(error);
    }
}



export const checkout = (items) => async(dispatch)=>{
    try{
        const {data} = await api.postPurchase(items);
        dispatch({type: 'CHECKOUT', payload: items});
    }catch(error){
        console.log(error.message);
    }
}


export const deleteOne = (itemIndex) => async(dispatch)=>{
    try{
        dispatch({type: 'REMOVE_ONE', payload: itemIndex});
    }catch(error){
        console.log(error.message);
    }
}

