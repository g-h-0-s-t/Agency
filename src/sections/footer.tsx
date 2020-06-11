import React from 'react'

function Footer() {
  const s = 'sss'
  return (
    <footer className='mt-32 bg-white'>
      <ol>
        <div>
          <p>104 Williamson Ave</p>
        </div>
        <li>
          <p></p>
        </li>
      </ol>
      <p className='text-center italic'>
        © Recruitocity ltd {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
