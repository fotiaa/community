import React, {useState} from 'react'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    console.log("dg", event.target.value)
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative">
        <div className="flex mt-8 justify-center">
            <input
                className="w-96 h-12 border rounded px-4 py-2 transition-colors border-gray-600 focus:outline-none"
                value={searchValue}
                onChange={handleChange}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
            />
            <button className=" pl-2 mt-1 h-10" >🔎</button>
        </div>
    </div>
  )
}

export default SearchBar