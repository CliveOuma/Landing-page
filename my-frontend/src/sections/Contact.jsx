import React from 'react'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section id='contact-us' className='items-center gap-10 max-lg:flex-col justify-between flex'>
        <h3 className=' text-4xl font-bold leading-[65px] lg:max-w-md'>Reach out for more
            <span className='text-orange-400'> information
            </span> & updates
        </h3>
        <div className='lg:max-w-[40%] items-center w-full flex border
        max-sm:flex-col gap-5 p-3 sm:border rounded-full  sm:border-slate-gray'>
            <input type='text' placeholder='examlpe@email.com'
            className='input' />
            <div className='items-center flex max-sm:justify-end max-sm:w-full'>
                <Button label="Email" />
            </div>
        </div>

    </section>
  )
}

export default Contact