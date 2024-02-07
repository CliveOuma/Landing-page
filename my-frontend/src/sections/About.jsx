import React from 'react'
import Button from '../components/Button'
import { lapi8 } from '../assets/images'

const About = () => {
  return (
    <section id='about-us' className='justify-between max=lg:flex-col gap-10 w-full max-container flex items-center'>
        <div className='flex flex-1 flex-col'>
          <h2 className='mt-10 text-4xl capitalize font-bold lg:max-w-lg'>
            We provide you
            <br />
            <span className='inline-block mt-3 text-orange-400'> Affordable </span>  Laptops
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>
            Our user-friendly website makes it easy for you to browse, compare, 
            and choose the perfect laptop for your requirements.
            We believe in transparency and strive to provide accurate product information and clear pricing.</p>
            <p className='mt-6 lg:max-w-lg info-text'>
            Our commitment is simple: to offer a carefully curated selection of laptops from top brands, 
            ensuring you get the latest technology.
            </p>
            <div className='mt-10'>
            <Button label="View Details"/>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <img src={lapi8} 
            alt='shoe8'
            width={550}
            height={520}
            className='object-contain'
            />

        </div>
    </section>
  )
}

export default About