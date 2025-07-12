import Header from './Header'
import Hero from './Hero'
import Products from './Products'
import FAQ from './FAQ'
import Footer from './Footer'
import SkincareSection from './sec1'
import WhyOurProducts from './sec2'
import  ProductGallery from './sec3'
export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <SkincareSection />
      <WhyOurProducts />
      <Products />
      <ProductGallery />
      <FAQ />
      <Footer />
    </main>
  )
}
