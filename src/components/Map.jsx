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
    <div className="container mx-auto max-w-[1500px] relative">
      <div className="flex max-md:flex-col h-full max-sm:justify-center max-sm:items-center">
        <div className="flex flex-col w-[18vw] justify-start items-start p-2 max-md:w-[50vw] max-sm:w-[90vw]">
          <h2 className="text-xl text-white font-bold font-montserrat mb-4">Selecciona un lugar</h2>
          <div className="flex flex-1 justify-center items-center content-center mx-auto">
            <p className="text-white font-montserrat text-2xl">¡Explora a donde quieras ir!</p>
          </div>
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