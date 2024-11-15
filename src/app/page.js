import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
//import Map from '../components/Map'
import HeadSection from '@/components/HeadSection'

export default function Home() {
  return (
    <div id="__next">
      <Nav />
      <main className='bg-[#0062FF] h-auto min-h-screen overflow-hidden z-[-10]' id='home'>
        <div className='bg-fixed max-sm:!bg-[#0062FF]'>
          <section className="relative mt-20 flex bg-cover bg-custom-linear -z-0">
            {/* <div className='triangle max-lg:hidden'></div> */}
            <Hero />
            <div className="flex absolute -bottom-5 left-10 items-center">
            <span className="bg-yellow-400 text-[#0062FF] font-montserrat font-bold text-xl px-4 py-2 rounded-lg rounded-br-3xl">
              Recomendaciones para ti
            </span>
          </div>
          </section>
          <section className='h-min-screen mt-10 '>
            <HeadSection />
            {/* <Map />  */}
          </section>
        </div>
        <section className='relative h-min-screen w-full' id='about'>
          <div className='bg-gradient-to-b from-[#c4a41a] from-0% via-[#FFD521] via-30% to-[#FFD521] to-90% h-min-screen w-full absolute inset-0 z-[0]'>
          </div>
          <About />
        </section>
        <section id='benefit' className='relative bg-[#0062FF]  bg-cover h-[85vh] w-full flex justify-center items-center'>
          {/* bg-[url("https://st.depositphotos.com/2125215/2599/v/450/depositphotos_25996281-stock-illustration-blue-circles-with-sparkles-vector.jpg")] */}
          <Carousel />
        </section>
        <section className='relative h-min-screen bg-[#FFD521]'>
          <div className='container mx-auto'>
            <Features />
          </div>
        </section>
        <section id='contact' className='relative container mx-auto h-min-screen w-full'>
          <Contact />
        </section>
        <section className='relative h-min-screen'>
          <Footer />
        </section>
      </main>
    </div>
  )
}