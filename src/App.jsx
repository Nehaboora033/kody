import './App.css'
import Hero from './components/Hero'
import RealBusiness from './components/RealBusiness'
import Leaders from './components/Leaders'
import SevenFigure from './components/SevenFigure'
import TechStack from './components/TechStack'
import Journey from './components/Journey'
import Current from './components/Current'
import LetsTalk from './components/LetsTalk'
import Hireme from './components/Hireme'
import Header from './components/common/Header'


function App() {


  return (
    <>
      <Header />
      {/* <Hero /> */}
      <RealBusiness />
      <Leaders />
      <section id="experience">
        <SevenFigure />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="about">
        <Journey />
      </section>
      <Current />
      <LetsTalk />
      <section id="contact">
        <Hireme />
      </section>
    </>
  )
}

export default App
