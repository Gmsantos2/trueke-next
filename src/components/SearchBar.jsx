'use client'

import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center items-center self-center mb-4 w-[80%] mx-auto">
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full font-montserrat text-[#1E1E1E] p-2 border rounded-xl shadow focus:outline-none focus:ring focus:border-blue-300 placeholder-[#1E1E1E]"
      />
    </div>
  )
}

export default SearchBar