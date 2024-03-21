import { statistics } from "../constants";
import {  lapi3 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 pl-10'>
        <h1 className='mt-8 font-palanquin text-8xl max-sm:text-[40px] max-sm:leading-[80px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-1'>
            New Arrival
          </span>
          <br />
          <span className='text-orange-400 inline-block mt-1'>Amazing</span> Laptops
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Get Affordable and advanced Laptops, high quality that could serve your online need with ease.</p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-10'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=' md:text-4xl  text-3xl  font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-30   bg-center'>
        <img
          src={lapi3}
          alt='laptop colletion'
          width={300}
          height={300}
          className='object-contain relative z-10  mb-2 '
        />
        </div>

      
      
    </section>
  );
};

export default Hero;