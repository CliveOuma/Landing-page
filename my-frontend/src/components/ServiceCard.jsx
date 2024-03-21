import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px]  h-[250px]
    sm:min-w-[350px] w-full rounded-[20px] py-15 shadow-3xl px-10'>
        <div className=' flex justify-center mt-6 rounded-full w-8 h-8 bg-coral-red items-center'>
            <img src={imgURL} alt={label}
             height={25}
             width={25}
            />
        </div>
        <h3 className='mt-5 leading-normal font-bold text-2xl'>{label}</h3>
        <p className='mt-3 text-lg leading-normal text-slate-gray break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard