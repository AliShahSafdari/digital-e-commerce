import Image from 'next/image'
import React from 'react'


function ProjectBanner({product}) {
      const bannerUrl = product?.attributes?.banner.data.attributes.url;
  return ( 
    <div> 
      {product?  <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${bannerUrl}` } 
    alt ="Iamge" width={400} 
    height={350}
    className='rounded-t-lg h-[170px] object-cover'/>
    
    :<div className='h-[350px] w-[350px] bg-slate-200 animate-pulse'>

    </div>}
    </div>
  )
}

export default ProjectBanner