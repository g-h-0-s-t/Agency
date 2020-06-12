import React from 'react'
import TextLoop from 'react-text-loop'
import image from '../assets/imgs/hero-1.svg'
function Hero() {
  return (
    <div className='overflow-hidden grid grid-cols-2 grid-rows-auto  h-screen bg-gray-900'>
      <h1 className='px-12 py-8 row-start-1 col-start-1 text-2xl text-white font-bold'>
        recruitocity
      </h1>
      <ul className='px-12 py-8 absolute right-0 top-0'>
        <li className=' border-white border-2 px-2 text-lg lg:text-xl font-roboto text-white'>
          Login
        </li>
      </ul>
      <div className='px-12 py-8 row-start-1 row-end-4 col-start-1 col-end-3 lg: col-end-1 h-full'>
        <div className='flex flex-wrap flex-col justify-center h-full'>
          <img className='mb-10 w-11/12 lg:hidden' src={image} />
          <h3 className='font-inter text-4xl text-white font-bold lg:text-4xl xl:text-5xl'>
            Fill <span className='hidden'>.</span>
            <TextLoop>
              <span className='text-purple-500'> sales </span>
              <span className='text-green-500'> labour </span>
              <span className='text-red-500'> driver </span>
            </TextLoop>
            <span className='hidden'>.</span> positions for a flat 10% fee
          </h3>
          <p className='pt-2 font-roboto font-semibold text-2xl text-gray-500'>
            Sign up free, we'll send over candidates within 3 days.
          </p>

          <div className='mt-10 '>
            <a
              href='#'
              className='px-8 py-3 tracking-wide text-lg text-white uppercase font-bold shadow-lg rounded-lg bg-purple-600'
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
      <div
        className='mt-24 ml-24 hidden w-64 col-start-2 col-end-3 row-start-1 row-end-3 lg:block bg-cover bg-no-repeat w-full'
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  )
}

export default Hero
