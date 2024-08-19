import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { Liveries } from "./components/Liveries"
import { Profiles } from "./components/Profiles"
import { Contact } from "./components/Contact"
import { Faq } from "./components/Faq"
import { NotFound } from "./components/NotFound"

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/profiles" element={ <Profiles /> }/>
        <Route path="/liveries" element={ <Liveries /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/faq" element={ <Faq /> }/>
        <Route path="/*" element={ <NotFound /> }/>
      </Routes>
      <Footer />
      </div>
    </>
  )
}

export default App
