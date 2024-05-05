"use client"
import Breadcrumb from '@/app/_components/Breadcrumb';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProjectBanner from './_components/ProjectBanner';
import ProjectInfo from './_components/ProjectInfo';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';

function ProgectDetails({params}) {
    const path = usePathname();
    const [productDetail, setProductDetail] = useState();
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        // console.log("Project Path", path);
        getProductById_();
    },[params?.projectId])

 const getProductById_ = ()=>{
    GlobalApi.getProductById(params?.projectId).then(resp =>{
        setProductDetail(resp.data.data);
        getProductListByCategory(resp.data.data);
    });
 } 

  const getProductListByCategory = (product) =>{
    GlobalApi.getProductByCategory(product?.attributes?.category).then(resp =>{
        setProductList(resp.data.data)
    });
  } 

    return (
    <div className='p-5 py-12 px-10 md:px-28'>
        <Breadcrumb path = {path}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-10 justify-evenly'>
            <ProjectBanner product = {productDetail} />
            <ProjectInfo product = {productDetail} />
        </div>
        
        {productList&&<div className='mt-20'>   
        <h2 className=' font-medium text-[20px] mb-4'>Similar Projects</h2>
        <ProductList productList={productList}/>
        </div>}
        </div>
  )
}

export default ProgectDetails