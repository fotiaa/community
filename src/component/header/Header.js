import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-black h-14">
      <ul className="flex justify-end">
      <Link to="/login"><li className="ml-4 mt-4 mr-8 text-white hover:underline">Login</li></Link>
        <Link to="/"><li className="ml-4 mt-4 mr-4 text-white hover:underline">Community</li></Link>
        <Link to="/about"><li className="ml-4 mt-4 mr-4 text-white hover:underline">About</li></Link>
        <Link to="/contact"><li className="ml-4 mt-4 mr-8 text-white hover:underline">Contact</li></Link>
      </ul>
    </div>
  )
}

export default Header