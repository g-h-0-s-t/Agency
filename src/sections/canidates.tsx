import React from 'react'
import Feature from '../components/feature'

function Canidates() {
  return (
    <div className='px-12 lg:px-32 py-8 lg:py-16 bg-gray-100 bg'>
      <h3 className='text-4xl lg:text-5xl text-left font-inter text-gray-900 font-bold'>
        Flexible candidates
      </h3>
      <h4 className='font-roboto text-left text-gray-600 text-2xl'>
        Filter your candidates with over 100 options.
      </h4>
      <Feature header='Reason 1' />
      <Feature header='Reason 2' reverse />
      <Feature header='Reason 3' />
    </div>
  )
}

export default Canidates
