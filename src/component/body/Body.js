import React from 'react'
import SearchBar from '../search-bar/SearchBar'
import CardItems from './CardItems'

const Body = () => {

  return (
    <div>
      <SearchBar/>
      <hr className='mt-4 mx-auto border border-gray-600' style={{ width: '40%' }} />
      <CardItems/>
    </div>
  )
}

export default Body