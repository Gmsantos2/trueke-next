'use client'

import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-4 w-full">
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg shadow focus:outline-none focus:ring focus:border-blue-300 placeholder-[#1E1E1E]"
      />
    </div>
  )
}

export default SearchBar