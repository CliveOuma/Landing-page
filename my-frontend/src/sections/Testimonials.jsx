import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const Testimonials = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center font-bold text-4xl'>Our
        <span className='text-orange-400'> Customers </span>
        Feedback
      </h3>
       <p className='m-auto info-text mt-4 text-center max-w-lg'>
         What our satisfied customers say about our products and the amazing
         experience, services they get from us 
       </p>
       <div className='flex flex-1 max-lg:flex-col gap-14 justify-evenly mt-24'>
       {reviews.map((review) => (
        <ReviewCard
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
        />
       ))}
       </div>
    </section>
  )
}

export default Testimonials