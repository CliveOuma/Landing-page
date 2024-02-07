import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex items-start justify-between
      flex-wrap gap-20 max-lg:flex-col'>
        <div className='items-start flex flex-col'>
          <h1 className='text-white text-3xl'>Laptops</h1>
        <p className='text-base mt-5 leading-7 text-white-400 items-start sm:max-w-sm'>
          Purchase amazing laptops that would satisfy your
          needs in the world that is digital whether you are a student
          or a professional we got you covered </p>
          <div className='flex mt-5 items-center gap-5'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center h-12 w-12 bg-white items-center'>
                <img src={icon.src} 
                alt={icon.alt}
                width={25}
                height={25}
                />
                </div>

            ))}
          </div>
        </div>
        <div className='flex flex-1 gap-10 flex-wrap justify-between lg:gap-10'>
           {footerLinks.map((section) => (
            <div key={section}>
               <h4 className='text-white mb-6 leading-normal text-2xl font-medium'>
                {section.title}
                <ul>
                  {section.links.map((link) => (
                     <li className='text-white-400 text-base leading-normal mt-3 cursor-pointer hover:text-red-900'
                     key={link.name}>
                    
                      <a>{link.name}</a>
                     </li>
                  ))}
                </ul>
               </h4>
              </div>
           ))}
        </div>
        </div>
        <div className='flex text-white-400 justify-between max-sm:items-center mt-5 max-sm:flex-col'>
        <div className='justify-start cursor-pointer items-center flex flex-1 gap-2'>
           <img src={copyrightSign}
           width={20}
           height={20}
           className='rounded-full m-0'
           />
           <p>Copyright. All rights reserverd.</p>
        </div>
        <p className='cursor-pointer'>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer