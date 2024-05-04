"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {
    const [productList, setPorductList] = useState([]);
    useEffect(()=>{
        getLastestProducts_();
    },[])
    const getLastestProducts_ = ()=>{
        GlobalApi.getLastestProducts().then(resp=>{
            setPorductList(resp.data.data);
        })
    }
    const filterProductList = (category) =>{
        const reslut=productList.filter(item =>item.attributes.category == category);
        return reslut; 
    }
  return productList&& (
    <div className='px-10 md:px-20'>
        {/* product list  */}
        <h2 className=' font-bold text-[20px] my-3 text-center'>Brand New</h2>
        <ProductList productList={productList}/>
        {/* Source Code  */}
        <h2 className=' font-bold text-[20px] my-3 text-center'>Source Code</h2>
        <ProductList productList={productList}/>

        {/*  Icons products  */}
        <h2 className=' font-bold text-[20px] my-3 text-center'>Icons</h2>
        <ProductList productList={productList}/>

    </div>
  )
}

export default ProductSection