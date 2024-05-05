import { SquareChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function ProductItem({product}) {
  return (
    <Link href={'/project-detail/'+ product.id}>
      <div  className=' hover:border p-1 rounded-lg border-blue-300'>
         <div>
            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.banner.data.attributes.url}`} 
             alt ="Iamge" width={400} 
             height={350}
             className='rounded-t-lg h-[170px] object-cover'/> 
         </div>
         <div className='flex justify-between items-center bg-gray-50 p-3 rounded-b-lg'>      
        <div className=''>
            <h2 className='text-[12px] font-medium line-clamp-1'> {product.attributes.title}</h2>
            <h2 className=' text-[10px] text-grey-400 flex gap-2'> <SquareChevronRight className='h-4 w-4' />{product.attributes.category}</h2>
         </div>
         <h2 className=' font-bold'>${product.attributes?.pricing}</h2>
         </div>
         </div>

    </Link>
    )
}

export default ProductItem