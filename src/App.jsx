import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoffeeCard from './components/CoffeeCard'
import About from './components/About'
import Feedback from './components/Feedback'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoffeeCard />
      <Feedback />
      <About />
      {/*
      <Features />
      <Menu />
      <Promo />
      <Footer /> */}
    </>
  )
}

export default App
