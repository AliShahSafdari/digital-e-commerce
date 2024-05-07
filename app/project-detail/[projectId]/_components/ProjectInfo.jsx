import { useUser } from '@clerk/nextjs';
import { BadgeCheck, ShoppingCart,OctagonAlert } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import GlobalApi from '../../../_utils/GlobalApi';
import { CartContext } from '../../../_context/CartContext';

function ProjectInfo({product}) {
  const {user} = useUser();
  const router = useRouter();
  const {cart, setCart} = useContext(CartContext);

  // use to add project/product into card
  const onAddToCartClick = ()=>{
      if(!user){
        router.push('/sign-in');
        return;
      }
      else{
        // logic to add  to cart
    const data={
          data:{
            userName: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
            products:product?.id
          }
        }
        GlobalApi.addToCard(data).then(resp=>{
          console.log("Add to Cart : ", resp);
          
          resp&&setCart(cart=>[...cart, 
            {id:resp?.data?.id,
              product:product
            }
            ]);
        }, (error)=>{
          console.log("Error : ", error);
        })
      }
  }
  const instantDelivery = product?.attributes?.instantDelivery;
  return (
    <div>
      {product?
      <div>
        <h2 className=' text-[20px]'>
          {product?.attributes?.title}
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

        <button  className='flex gap-2 p-3 px-10 
        mt-5 bg-primary text-white rounded-lg
         hover:bg-white  hover:border border-primary
          hover:text-primary'  
          onClick={onAddToCartClick}>
          <ShoppingCart/>
           Add to Cart</button> 
           </div>
           :<div>
           <div className='h-[30px] w-[400px] bg-slate-200 animate-pulse'>
    </div>
           </div>}
      </div>
  )
}

export default ProjectInfo