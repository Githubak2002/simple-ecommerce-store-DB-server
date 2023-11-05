import React from 'react'
import { Link } from 'react-router-dom'
import emptycart from '../assets/emptycart.png'

const EmptyCart = () => {
  return (
    <main className='flexCenter h-[70vh] text-md sm:text-xl flex-col px-3'>
      <img className='h-40' src={emptycart} alt="empty_cart_png" />
      <h1 className='text-xl text-red-500 font-semibold mb-3'>No items in cart.</h1>
      <Link to="/" className='mt-6 hover:underline text-blue-600'>Add items to cart</Link>
    </main>
  )
}

export default EmptyCart