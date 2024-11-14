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
      <main className='bg-[#0033FF] h-auto min-h-screen overflow-hidden z-[-10]' id='home'>
        <div className='bg-radial-gradient bg-fixed max-sm:!bg-[#001f9960]'>
          <section className="mt-20 flex bg-cover bg-gray-400">
            {/* <div className='triangle max-lg:hidden'></div> */}
            <Hero />
          </section>
          <section className='h-min-screen mt-10 '>
            <HeadSection />
            {/* <Map />  */}
          </section>
        </div>
        <section className='relative h-min-screen w-full' id='about'>
          <div className='bg-[#FFD521] h-min-screen w-full absolute inset-0 z-[0]'>
          </div>
          <About />
        </section>
        <section id='benefit' className='relative bg-[#0033FF]  bg-cover h-[85vh] w-full flex justify-center items-center'>
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