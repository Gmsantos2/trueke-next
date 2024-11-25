'use client'

import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./LeatfletMap'), { ssr: false })

const Map = () => {
  const [places, setPlaces] = useState([])
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [currentPosition, setCurrentPosition] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const URL = 'https://trueke.nodo.com.ec'
  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  const fetchStores = useCallback(async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/shop/list/10/0`, {
        headers: { 'x-api-key': apiKey },
      })
      setPlaces(response.data.docs)
    } catch (error) {
      console.error('Error al obtener las tiendas:', error)
    } finally {
      setIsLoading(false)
    }
  }, [apiKey])

  useEffect(() => {
    fetchStores()
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setCurrentPosition([latitude, longitude])
      })
    }
  }, [fetchStores])

  const handlePlaceSelect = useCallback((placeId) => {
    const place = places.find((p) => p._id === placeId)
    setSelectedPlace(place)
  }, [places])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="container mx-auto max-w-[1500px] relative z-0">
      <div className="relative flex max-md:flex-col h-full max-sm:justify-center max-sm:items-center">
        <div className="absolute -top-5 left-14 max-sm:left-4 justify-start items-start p-2 max-md:w-[50vw] max-sm:w-[90vw] z-[1000]">
        <span className="bg-yellow-400 text-[#0062FF] max-sm:text-lg font-montserrat font-black text-2xl px-4 py-2 rounded-lg rounded-br-3xl">
              Selecciona un lugar
            </span>
        </div>
        <div className="relative w-full h-full">
          <DynamicMap 
            places={places} 
            currentPosition={currentPosition}
            selectedPlace={selectedPlace}
            onPlaceSelect={handlePlaceSelect}
          />
        </div>
      </div>
    </div>
  )
}

export default Map