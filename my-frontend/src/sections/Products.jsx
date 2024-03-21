import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold'>Our <span className='text-orange-400'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 text-slate-gray'>Awesome and Quaility Laptops with amazing features such
          Screen rotation and gifts bonus upon purchase such as mouse
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-4 grid-cols-1'>
        {products.map((product) => (
          <ProductCard key=
            {product.name} {...product} />
        ))}
      </div>

    </section>
  )
}

export default Products