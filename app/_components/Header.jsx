import { useUser, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import GlobalApi from '../_utils/GlobalApi';
import Cart from './Cart';

function Header() {
  const { user } = useUser();
  const path = usePathname();
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    user && getUserCartItem();
  }, [user])

  useEffect(() => {
    // !openCart&&setOpenCart(true);
    openCart == false && setOpenCart(true);

  }, [cart])

  // call Globle api for cart
  const getUserCartItem = () => {
    GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(resp => {
      const reslut = resp.data.data
      reslut && reslut.forEach(prd => {
        console.log(prd.attributes.products.data[0])
        setCart(cart => [...cart,
        {
          id: prd.id,
          product: prd.attributes.products.data[0]
        }
        ])

      });
    })
  }


  if (path != '/sign-in' && path != '/sign-up') {
    return (<header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl shadow-sm
   items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" alt="logo" width={80} height={100} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explor </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <h2 className='flex gap-1 cursor-pointer'
              onClick={() => setOpenCart(!openCart)}>
              <ShoppingCart className='text-primary' openCart={openCart} setOpenCart={setOpenCart} /> ({cart?.length})
              {openCart && <Cart />}
            </h2>

            <SignedOut>
              <SignInButton className=" bg-gray-200 text-primary border-separate rounded-lg px-2" />
            </SignedOut>
            <SignedIn>
              <UserButton className=" bg-primary text-gray-200 border-separate rounded-lg px-2" />
            </SignedIn>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

export default Header