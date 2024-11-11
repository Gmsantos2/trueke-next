import React from 'react'
import Image from 'next/image'
import styles from '../styles/hero.module.css'

const Hero = () => {
    return (
        <div className='container pt-10 flex max-h-[40vh] w-auto justify-between content-center md:flex-row mx-auto gap-9'>
            <div className='flex flex-col pl-8 font-montserrat justify-start text-white  w-[100vw] md:w-[60vw] 2xl:w-[50vw]'>   
                <h2 className='w-[70vw] max-md:w-[80vw] lg:w-[60vw] p-6 font-medium align-middle text-xl sm:text-2xl leading-tight tracking-wide'>
                    Impulsa tu negocio con nuestro sistema de publicidad.
                </h2>                       
                <p className='w-[60vw] max-md:w-[70vw] lg:w-[50vw] 2xl:w-[45vw] px-6 leading-normal xl:text-xl max-sm:hidden'>
                    La plataforma integral para gestionar, optimizar y analizar todas tus campañas publicitarias desde un solo lugar. Maximiza tu alcance, conecta con la audiencia correcta y aumenta tus conversiones con nuestra plataforma publicitaria avanzada. 
                </p>                 
            </div>
            
            <div className='flex pt-14 lg:pt-4 mx-auto h-full w-[200px] items-center justify-center max-md:hidden'>
                <Image 
                    src="/main.png" 
                    width={200} 
                    height={200} 
                    className={`${styles['image-animated']} object-contain w-full h-auto`} 
                    alt="main" 
                />
            </div>
        </div>
    )
}

export default Hero