import axios from "axios";

const url = "https://presyontest.herokuapp.com";

//ITEMS ROUTES
export const fetchItems = () => axios.get(`${url}/items`);
export const fetchItem = (id) => axios.get(`${url}/items/${id}`);
export const createItem = (newItem) => axios.post(`${url}/items`, newItem);

//PURCHASE ROUTES
export const postPurchase = (item) => axios.post(`${url}/purchases`, item);

// const url = 'http://localhost:5000/items';

// export const fetchItems = () => axios.get(url);
// export const fetchItem = (id) => axios.get(`${url}/${id}`);
// export const createItem = (newItem) => axios.post(url, newItem);
