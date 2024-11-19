'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import throttle from 'lodash/throttle';
import axios from 'axios';

// Carga dinámica de los componentes de react-leaflet
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const useMap = dynamic(() => import('react-leaflet').then((mod) => mod.useMap), { ssr: false });

const positionIcon = '/assets/curr_position.png';
const randomIcon = '/assets/gis_position.png';

const MapCenter = ({ position }) => {
  const leafletMap = useMap();
  useEffect(() => {
    if (position) {
      leafletMap.setView(position, 15);
    }
  }, [position, leafletMap]);
  return null;
};

const Map = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentPosition, setCurrentPosition] = useState([51.505, -0.09]);
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const URL = 'https://trueke.nodo.com.ec';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  // Obtener las tiendas
  const fetchStores = async () => {
    try {
      const response = await axios.get(`${URL}/api/v1/shop/list/10/0`, {
        headers: { 'x-api-key': apiKey },
      });
      setPlaces(response.data.docs);
    } catch (error) {
      console.error('Error al obtener las tiendas:', error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition([latitude, longitude]);
        setMapPosition([latitude, longitude]);
        obtenerDatosDeUbicacionLimitado(latitude, longitude);
      });
    }
    fetchStores();
  }, []);

  const obtenerDatosDeUbicacion = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      if (response.ok) {
        const data = await response.json();
        // Manejar datos de dirección si es necesario
      }
    } catch (error) {
      console.error('Error al obtener los datos de la ubicación:', error);
    }
  };

  const obtenerDatosDeUbicacionLimitado = throttle(obtenerDatosDeUbicacion, 10000);

  const handlePlaceSelect = (placeId) => {
    const place = places.find((p) => p._id === placeId);
    setSelectedPlace(place);
    if (place) {
      const [lon, lat] = place.location.coordinates;
      setMapPosition([lat, lon]);
    }
  };

  const currentLocationIcon = L.icon({
    iconUrl: positionIcon,
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });

  const selectedPlaceIcon = L.icon({
    iconUrl: randomIcon,
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });

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
          <div className="absolute top-4 right-4 z-[1] w-full max-w-[25%]">
            <select
              className="w-full max-w-full p-2 mb-4 rounded font-montserrat border border-[#1E1E1E] text-[#1E1E1E] overflow-hidden"
              onChange={(e) => handlePlaceSelect(e.target.value)}
            >
              <option value="">Elige un lugar</option>
              {places.map((place) => (
                <option key={place._id} value={place.id}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          {currentPosition && (
            <MapContainer
              center={mapPosition}
              zoom={11}
              zoomControl={false}
              style={{ height: '75vh', width: '100%', zIndex: 0 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <MapCenter position={mapPosition} />
              <Marker position={currentPosition} icon={currentLocationIcon} />
              {selectedPlace && (
                <Marker
                  position={[
                    selectedPlace.location.coordinates[1],
                    selectedPlace.location.coordinates[0],
                  ]}
                  icon={selectedPlaceIcon}
                >
                  <Popup>{selectedPlace.name}</Popup>
                </Marker>
              )}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
