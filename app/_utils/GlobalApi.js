const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = 'http://localhost:1337/api';

const axiosClien = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization:`Bearer ${apiKey}`
    }
})   

const getLastestProducts= ()=> axiosClien.get('/products?populate=*');
const getProductById = (id) => axiosClien.get('/products/'+id+'?populate=*');
const getProductByCategory = (category) => axiosClien.get('/products?filters[category][$eq]='+category+"&populate=*") 

export default{
    getLastestProducts,
    getProductById,
    getProductByCategory
}