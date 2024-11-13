'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Modal = ({ modalItems, handleCloseModal, handleClick, URL }) => {
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => setIsDragging(false)
  const handleMouseMove = () => setIsDragging(true)
  const handleMouseUp = (item) => !isDragging && handleClick(item)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white pb-2 rounded-lg p-4 h-[90vh] w-[90vw]">
        <div className="flex justify-between pb-3">
          <h2 className="font-montserrat text-lg">Store</h2>
          <button onClick={handleCloseModal} className="bg-red-600 text-white p-2 rounded">
            Cerrar
          </button>
        </div>
        <div className="overflow-y-auto h-[70vh] hidden-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain">
            {modalItems.map((item) => (
              <div key={item._id}
                className="flex flex-col items-center p-4 bg-gray-100 shadow-md rounded-md"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp(item)}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={() => handleMouseUp(item)}
              >
                <Image src={`${URL}${item.logo}`} alt={item.name} width={160} height={160} className="w-full h-40 object-contain" />
                <p className="text-center text-[#1E1E1E] font-montserrat font-light mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal