const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api';

const axiosClien = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})

const getLastestProducts = () => axiosClien.get('/products?populate=*');
const getProductById = (id) => axiosClien.get('/products/' + id + '?populate=*');
const getProductByCategory = (category) => axiosClien.get('/products?filters[category][$eq]=' + category + "&populate=*");
// Add to Card Collection
const addToCard = (data) => axiosClien.post('/carts', data);
// Get User Cart Item
const getUserCartItems = (email) => axiosClien.get('/carts?populate[products][populate][0]=banner&filters[email][$eq]=' + email);
// Delete Cart Item
const deleteCartItem = (id) => axiosClien.delete('/carts/' + id);
export default {
    getLastestProducts,
    getProductById,
    getProductByCategory,
    addToCard,
    getUserCartItems,
    deleteCartItem,
}