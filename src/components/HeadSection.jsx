'use client'

import React, { useEffect, useState } from "react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios'
import SearchBar from "./SearchBar"
import TypeFilter from "./TypeFilter"
import RecommendationSlider from "./RecommendationSlider"
import ItemSlider from "./ItemSlider"
import PopularItemsSlider from "./PopulasItemsSlider"
import Modal from "./Modal"
import { data2 } from "../data/data"

const HeadSection = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [popularItems, setPopularItems] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [filteredItems, setFilteredItems] = useState([])
  const [displayedItems, setDisplayedItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalItems, setModalItems] = useState([])
  const limit = 100
  const skip = 0
  const URL = 'https://trueke.nodo.com.ec'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY
        const response = await axios.get(`${URL}/api/v1/shop/list/${limit}/${skip}`, {
          headers: {
            'x-api-key': apiKey,
          },
        })
        setData(response.data.docs)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const allItems = data.flatMap((store) => ({ ...store, category_name: store.name }))
      const popular = allItems
        .map(item => {
          const totalScore = Object.values(item.scores).reduce((sum, score) => sum + score, 0)
          const averageScore = totalScore / Object.keys(item.scores).length
          return { ...item, averageScore }
        })
        .sort((a, b) => b.averageScore - a.averageScore)
        .slice(0, Math.min(8, allItems.length))

      setPopularItems(popular)
    }
  }, [data])

  useEffect(() => {
    const filtered = data.filter(item => {
      const categoryMatch = selectedType ? item.type === selectedType : true
      const searchMatch = searchTerm ?
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) : true
      return categoryMatch && searchMatch
    })
    setFilteredItems(filtered)
    setDisplayedItems(filtered.slice(0, 8))
  }, [data, selectedType, searchTerm])

  const handleOpenModal = (items) => {
    setModalItems(items)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleClick = (item) => {
    router.push(`/item/${item._id}`)
  }

  const handleClickPlaces = (item) => {
    router.push(`/place/${item.id}`)
  }

  return (
    <div className="container mx-auto min-h-screen p-4 max-sm:p-2 pt-16 lg:pt-8 max-sm:pt-1 pb-8" id="head">
      <h2 className="text-xl font-bold font-montserrat text-white pt-6">Recomendaciones para ti</h2>
      <RecommendationSlider allRecomendations={data2.pais.regiones.flatMap((data) =>
        data.provincias.map((item) => ({ ...item, place_name: data.nombre }))
      )} handleClickPlaces={handleClickPlaces} />
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <TypeFilter data={data} selectedType={selectedType} setSelectedType={setSelectedType} />
      
      <ItemSlider 
        isLoading={isLoading} 
        displayedItems={displayedItems} 
        handleOpenModal={handleOpenModal}
        URL={URL}
      />

      <h2 className="text-xl font-bold font-montserrat text-white mb-6 pt-6">Popular</h2>
      
      <PopularItemsSlider 
        isLoading={isLoading} 
        popularItems={popularItems} 
        handleClick={handleClick}
        URL={URL}
      />

      {isModalOpen && (
        <Modal 
          modalItems={modalItems} 
          handleCloseModal={handleCloseModal} 
          handleClick={handleClick}
          URL={URL}
        />
      )}
    </div>
  )
}

export default HeadSection