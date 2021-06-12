import * as api from '../api/index';

export const getItems = () => async(dispatch) =>{
    try{
        const {data} = await api.fetchItems();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(error){
        console.log(error);
    }
}

export const getItem = (id) => async(dispatch) =>{
    try{
        const {data} = await api.fetchItem(id);
        dispatch({type: 'FETCH_BYID', payload: data});
    }catch(error){
        console.log(error);
    }
}

export const createItem = (item) => async(dispatch)=>{
    try{
        const {data} = await api.createItem(item);
        dispatch({type: 'CREATE', payload: item});
    }catch(error){
        console.log(error);
    }
}