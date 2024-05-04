import Image from 'next/image'
import React from 'react'


function ProjectBanner({product}) {
    if (!product) {
        return <div>Loading product information...</div>; // Or display any other message/component while loading
      }
      const bannerUrl = product?.attributes?.banner.data.attributes.url;
  return (
    <div> 
        <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${bannerUrl}` } 
    alt ="Iamge" width={400} 
    height={350}
    className='rounded-t-lg h-[170px] object-cover'/>
    </div>
  )
}

export default ProjectBanner