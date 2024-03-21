import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col max-sm:w-full w-full'>
        <img src={imgURL} alt={name}
        className='w-[250px] h-[250px]' />
        <div className='justify-start gap-2.5 mt-8 flex'>
            <img src={star} alt='rating' 
            width={20}
            height={20} />
        <p className='text-slate-gray leading-normal text-xl'>4.6</p>
        </div>
        <h3 className='leading-normal mt-2 text-2xl font-semibold'>{name}</h3>
        <p className='text-coral-red leading-normal mt-2 text-2xl font-semibold'>{price}</p>
    </div>
  )
}

export default ProductCard