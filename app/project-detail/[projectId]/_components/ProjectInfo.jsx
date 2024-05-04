import { BadgeCheck, ShoppingCart,OctagonAlert } from 'lucide-react'
import React from 'react'

function ProjectInfo({product}) {
  console.log(product)
  const instantDelivery = product?.attributes?.instantDelivery;
  return (
    <div>
        <h2 className=' text-[20px]'>{product?.attributes?.title}
        </h2>
        <h2 className=' text-[15px] text-gray-400'>
          {product?.attributes?.category}
        </h2>

        <h2 className=' flex gap-2 mt-5 text-gray-500 text-[13px]'>
          {instantDelivery? <BadgeCheck className=' text-green-500 h-4 w-5'/> : 
          <OctagonAlert className=' text-yellow-400 h-4 w-5' /> }
          Eligibale for Instant Delivery
        </h2>

        <h2 className=' text-[32px] text-primary font-medium'>
          $ {product?.attributes?.pricing}
        </h2>

        <button className='flex gap-2 p-3 px-10 mt-5 bg-primary text-white rounded-lg hover:bg-white  hover:border border-primary hover:text-primary'>
          <ShoppingCart/>
           Add to Cart</button>
        

      </div>
  )
}

export default ProjectInfo