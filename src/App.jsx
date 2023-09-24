import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import Navbar from './components/Navbar'
import Header from "./components/Header"
import Partnyorlar from "./components/Partnyorlar"
import Section from "./components/Section"
import Kards from "./components/Kards"
import Muraciet from "./components/Muraciet"
import Footer from "./components/Footer"






function App() {

  return (
   
    <div>
      <Navbar />
      <Header />
      <Partnyorlar />
      <Section />
      <Kards />
      <Muraciet />
      <Footer />
    </div>

  )
}

export default App
