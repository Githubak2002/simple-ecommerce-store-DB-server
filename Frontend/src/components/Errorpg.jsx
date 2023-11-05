import React from 'react'
import error  from '../assets/error.png'
import { Link } from 'react-router-dom'

const Errorpg = () => {
  return (
    <div className='flexCenter flex-col h-[76vh]'>
      <img src={error} alt="404_error_png" className=' min-w-[210px] w-[20vw]'/>
       
      <Link to="/" className='text-xl font-semibold text-blue-600'> Go to Home page...</Link>
    </div>
  )
}

export default Errorpg