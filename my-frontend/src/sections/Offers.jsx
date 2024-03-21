import React from 'react'
import { lapi9 } from '../assets/images'
import Button from '../components/Button'

const Offers = () => {
  return (
    <section className='flex items-center justify-wrap gap-10 max-container max-xl:flex-col-reverse'>
      <div className='flex-1'>
        <img src={lapi9}
        height={300}
        width={300}
        className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
          <h2 className='mt-10 text-4xl capitalize font-bold lg:max-w-lg'>
            <span className='inline-block mt-3 text-orange-400'> Our </span> Offers
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>
            We offer deals Whether you're a professional seeking power-packed performance, 
            a student in need of a reliable study companion, or someone 
            who simply appreciates cutting-edge gadgets, we've got you covered..</p>
            <p className='mt-6 lg:max-w-lg info-text'>
            We fulfill your desires by offering reliable and high-performance devices that 
            seamlessly integrate into your lifestyle.
            </p>
            <div className='mt-10'>
            <Button label="Learn More"/>
            </div>
        </div>
    </section>
  )
}

export default Offers