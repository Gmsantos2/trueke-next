'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className='w-full top-0 left-0 h-[80px] fixed bg-[#0033ff9f] border-b-[1px] backdrop-blur-sm z-10'>
            <div className='flex w-full h-full justify-between items-center'>
                <div className='pl-7 w-40'>
                    <Image src='/trueke.png' width={160} height={80} className='max-w-[100%] max-h-auto' alt="trueke logo" />
                </div>

                {/* Botón hamburguesa para pantallas pequeñas */}
                <div className="block md:hidden pr-7">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <div className={`w-8 h-8 relative transform transition-all duration-500 ${isOpen ? 'rotate-90' : ''}`}>
                            <span className="block absolute h-1 w-full bg-white transform transition-all duration-500 top-1/2 left-0 -translate-y-1/2" style={{ top: isOpen ? '12px' : '8px', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}></span>
                            <span className={`block absolute h-1 w-full bg-white transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className="block absolute h-1 w-full bg-white transform transition-all duration-500 bottom-1/2 left-0 translate-y-1/2" style={{ bottom: isOpen ? '12px' : '8px', transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></span>
                        </div>
                    </button>
                </div>

                {/* Menú horizontal para pantallas grandes */}
                <div className={`hidden md:flex w-[80%] justify-center`}>
                    <ul className='flex gap-3 items-center font-montserrat font-semibold text-lg '>
                        <li className='flex text-white p-7 transition-transform duration-500 hover:scale-125'>
                            <Link href="/" className='text-lg'>Inicio</Link>
                        </li>
                        <li className='flex text-white p-7 transition-transform duration-500 hover:scale-125'>
                            <Link href="#about" className='text-lg'>Sobre nosotros</Link>
                        </li>
                        <li className='flex text-white p-7 transition-transform duration-500 hover:scale-125'>
                            <Link href="#benefit" className='text-lg'>Beneficios</Link>
                        </li>
                        <li className='flex text-white p-7 transition-transform duration-500 hover:scale-125'>
                            <Link href="#contact" className='text-lg'>Contáctanos</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Menú vertical para pantallas pequeñas con botón de cierre */}
            <div className={`md:hidden fixed top-0 left-0 w-full bg-[#0033ffe5] text-center transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {/* Botón para cerrar el menú */}
                <div className="flex justify-end pr-5 pt-3">
                    <button
                        onClick={closeMenu}
                        className="text-white text-4xl w-[52px] h-[52px] flex justify-center items-center p-0 focus:outline-none"
                    >
                        x
                    </button>
                </div>

                <ul className='flex flex-col gap-4 items-center font-montserrat font-semibold text-lg py-6'>
                    <li className='text-white hover:bg-white hover:text-[#0033FF] w-full py-4 transition duration-300 ease-in-out'>
                        <Link href="/" onClick={closeMenu} className='block w-full text-lg'>Inicio</Link>
                    </li>
                    <li className='text-white hover:bg-white hover:text-[#0033FF] w-full py-4 transition duration-300 ease-in-out'>
                        <Link href="#about" onClick={closeMenu} className='block w-full text-lg'>Sobre nosotros</Link>
                    </li>
                    <li className='text-white hover:bg-white hover:text-[#0033FF] w-full py-4 transition duration-300 ease-in-out'>
                        <Link href="#benefit" onClick={closeMenu} className='block w-full text-lg'>Beneficios</Link>
                    </li>
                    <li className='text-white hover:bg-white hover:text-[#0033FF] w-full py-4 transition duration-300 ease-in-out'>
                        <Link href="#contact" onClick={closeMenu} className='block w-full text-lg'>Contáctanos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}