import React from 'react'
import Button from '../components/Button'

const About = () => {
  return (
    <section id='about' className='max-container'>
      <h3 className='text-center font-bold text-4xl '>Get
        <span className='text-orange-400'> Affordable </span>
        Laptops
      </h3>
      <p className='m-auto info-text mt-4 text-center max-w-lg'>
        Our user-friendly website makes it easy for you to browse, compare,
        and choose the perfect laptop for your requirements.
        We believe in transparency and strive to provide accurate product information and clear pricing.
        Our commitment is simple: to offer a carefully curated selection of laptops from top brands,
        ensuring you get the latest technology.
      </p>
      <div className='mt-10 px-4 md:px-10 lg:px-20 xl:px-40'>
        <Button label="View Details" />
      </div>

    </section>
  )
}

export default About



