'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const LeafletMap = ({ places, currentPosition, selectedPlace, onPlaceSelect }) => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef({})

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapInstanceRef.current) {
      const map = L.map(mapRef.current, { zoomControl: false }).setView([0, 0], 2)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
      mapInstanceRef.current = map
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    // Clear all existing markers
    Object.values(markersRef.current).forEach(marker => map.removeLayer(marker))
    markersRef.current = {}

    // Add current position marker
    if (currentPosition) {
      const currentPositionMarker = L.marker(currentPosition, {
        icon: L.divIcon({
          className: 'custom-div-icon',
          html: '<div style="background-color: #4CAF50; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #FFF;"></div>',
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })
      }).addTo(map)
      currentPositionMarker.bindPopup('Tu ubicación')
      markersRef.current['currentPosition'] = currentPositionMarker
    }

    // Add selected place marker
    if (selectedPlace) {
      const [lng, lat] = selectedPlace.location.coordinates
      const placeMarker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'custom-div-icon',
          html: '<div style="background-color: #FF5722; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #FFF;"></div>',
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        })
      }).addTo(map)
      
      placeMarker.bindPopup(`
        <div>
          <h3 style="font-weight: bold;">${selectedPlace.name}</h3>
          <p>${selectedPlace.address}</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 10px; padding: 5px 10px; background-color: #3388ff; color: white; text-decoration: none; border-radius: 5px;">
            Cómo llegar
          </a>
        </div>
      `)
      
      markersRef.current['selectedPlace'] = placeMarker

      // Fit map to show both markers
      if (currentPosition) {
        const bounds = L.latLngBounds([currentPosition, [lat, lng]])
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 })
      } else {
        map.setView([lat, lng], 15)
      }
    } else if (currentPosition) {
      map.setView(currentPosition, 15)
    }
  }, [currentPosition, selectedPlace])

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-[1000] w-full max-w-[25%]">
        <select
          className="w-full max-w-full p-2 mb-4 rounded font-montserrat border border-[#1E1E1E] text-[#1E1E1E] overflow-hidden"
          onChange={(e) => onPlaceSelect(e.target.value)}
        >
          <option value="">Elige un lugar</option>
          {places.map((place) => (
            <option key={place._id} value={place._id}>
              {place.name}
            </option>
          ))}
        </select>
      </div>
      <div ref={mapRef} style={{ width: '100%', height: '75vh' }} />
    </div>
  )
}

export default LeafletMap