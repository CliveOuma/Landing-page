import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex items-center flex-col justify-center'>
      <img src={imgURL}
        alt="customer"
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm info-text text-center'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center'>
        <img src={star}
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='text-slate-grey text-xl px-2'> {rating} </p>
      </div>
      <h3 className='text-3xl font-bold mt-1 text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard 