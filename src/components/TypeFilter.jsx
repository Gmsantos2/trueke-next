'use client'

import React from 'react'

const TypeFilter = ({ data, selectedType, setSelectedType }) => {
  return (
    <div className="overflow-x-scroll bg-yellow-400 rounded-3xl my-5">
      <div className="flex container space-x-3 gap-1 h-full">
        {[...new Set(data.map((shop) => shop.type))].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`bg-[#FFD521] truncate p-1 m-4 min-w-[130px] text-center font-montserrat text-[#1E1E1E] rounded-lg shadow hover:bg-gray-400 whitespace-nowrap ${
              selectedType === type ? 'bg-gray-400' : ''
            }`}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedType(null)}
          className={`bg-[#FFD521] p-1 m-4 min-w-[100px] text-center font-montserrat text-[#1E1E1E] rounded-lg shadow hover:bg-gray-400 whitespace-nowrap ${
            selectedType === null ? 'bg-gray-400' : ''
          }`}
        >
          Todos
        </button>
      </div>
    </div>
  )
}

export default TypeFilter