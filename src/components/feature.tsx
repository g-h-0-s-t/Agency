import React from 'react'
import image from '../assets/imgs/demo-1.png'

function Feature(props: { header: string; reverse?: boolean }) {
  const reverseClass = '-ml-12 lg:-ml-32 lg:object-cover col-start-1'
  const defaultClass = 'ml-12 lg:ml-32 lg:object-cover col-start-2 row-start-1'
  return (
    <div
      className={`grid grid-cols-2 grid-rows-auto mt-16 -mx-12 lg:-mx-32 px-12 lg:px-32 -my-8 py-8 ${
        props.reverse ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <img
        src={image}
        className={`shadow-xl ${props.reverse ? reverseClass : defaultClass}`}
        alt=''
      />
      <div className={`flex flex-wrap content-center text-xl lg:text-2xl`}>
        <h4 className='font-inter text-2xl font-hairline text-gray-700'>
          {props.header}
        </h4>
        <p className='mt-2 font-roboto text-gray-900'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
          mollitia sequi cupiditate ex ipsa. Dicta exercitationem expedita iure
          illum deserunt nisi aut odio rem neque quidem, tempore, mollitia ad
          tenetur?
        </p>
      </div>
    </div>
  )
}

export default Feature
