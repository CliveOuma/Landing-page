import React from 'react'

const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg 
    bg-coral-red border-coral-red text-white rounded-full leading-none w-full'>
      {label}
      {/*when there is an image*/}
      {iconURL &&
        <img src={iconURL} alt='arrow right icon'
          className='ml-2 rounded-full w-4 h-4' />
      }

    </button>
  )
}

export default Button