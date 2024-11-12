'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import { AiOutlinePlus } from 'react-icons/ai'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../styles/comments.module.css'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('react-modal'), { ssr: false })

const Comments = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [nuevoComentario, setNuevoComentario] = useState('')
  const [nombre, setNombre] = useState('')
  const [comentarios, setComentarios] = useState([
    { nombre: 'Juan', comentario: 'Este es un comentario excelente.' },
    { nombre: 'Maria', comentario: 'Muy útil y relevante.' },
    { nombre: 'Pedro', comentario: 'Me encanta la facilidad de uso.' },
  ])

  const abrirModal = () => {
    setModalIsOpen(true)
  }

  const cerrarModal = () => {
    setModalIsOpen(false)
  }

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== '' && nombre.trim() !== '') {
      setComentarios([...comentarios, { nombre, comentario: nuevoComentario }])
      setNuevoComentario('')
      setNombre('')
      cerrarModal()
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  return (
    <div className={`${styles.comentariosSeccion} bg-gray-100 p-6 rounded-lg shadow-md relative z-10`}>
      <div className="flex justify-end mb-4">
        <button
          onClick={abrirModal}
          className={`${styles.btnAgregarComentario} flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300`}
          aria-label="Agregar Comentario"
        >
          <AiOutlinePlus size={30} /> 
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Comentarios</h2>
      <Slider {...settings} className="relative mb-6">
        {comentarios.map((item, index) => (
          <div key={index} className={`${styles.comentario} p-4 bg-white rounded-lg shadow-lg text-gray-700 flex items-center`}>
            <div className="mr-4 font-bold text-blue-600">{item.nombre}</div>
            <div>{item.comentario}</div>
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={cerrarModal}
        contentLabel="Agregar Comentario"
        className={`${styles.modal} bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[500px] mx-auto relative`}
        overlayClassName={`${styles.overlay} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Agregar un Nuevo Comentario</h2>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          rows="5"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        <div className={`${styles.modalButtons} flex justify-end space-x-4`}>
          <button
            onClick={agregarComentario}
            className={`${styles.btnGuardar} bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300`}
          >
            Guardar
          </button>
          <button
            onClick={cerrarModal}
            className={`${styles.btnCerrar} bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300`}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Comments